from typing import Optional, List
from fastapi import APIRouter, status, HTTPException, Request
from pydantic import BaseModel
from db import prisma
from cloud import delete_from_cloud

router = APIRouter()


class ProductSchema(BaseModel):
    name: str
    description: Optional[str] = None
    selling_price: float = 0.0
    buying_price: float = 0.0
    qty: int = 1


class ProductUpdateSchema(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    selling_price: Optional[float] = None
    buying_price: Optional[float] = None
    qty: Optional[int] = None


# 1. CREATE PRODUCT (POST)
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(payload: ProductSchema):
    new_product = await prisma.product.create(
        data={
            "name": payload.name,
            "description": payload.description,
            "selling_price": payload.selling_price,
            "buying_price": payload.buying_price,
            "qty": payload.qty,
        }
    )
    return {"message": "New item added", "product": new_product}


# 2. GET ALL PRODUCTS
@router.get("/", status_code=status.HTTP_200_OK)
async def get_all_products():
    products = await prisma.product.find_many(include={"images": True})
    return products


# 3. GET PRODUCT BY ID
@router.get("/{product_id}", status_code=status.HTTP_200_OK)
async def get_product_by_id(product_id: str):
    product = await prisma.product.find_unique(
        where={"id": product_id},
        include={"images": True}
    )
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found"
        )
    return product


# 4. UPDATE PRODUCT (PUT/PATCH)
@router.patch("/{product_id}", status_code=status.HTTP_200_OK)
async def update_product(product_id: str, payload: ProductUpdateSchema):
    product = await prisma.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found"
        )

    # Filter out unsupplied/None fields
    update_data = {k: v for k, v in payload.model_dump().items() if v is not None}
    
    if not update_data:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No update fields provided"
        )

    updated_product = await prisma.product.update(
        where={"id": product_id},
        data=update_data
    )
    return {"message": "Product updated successfully", "product": updated_product}


# 5. DELETE PRODUCT (With Cloudinary & database cascade cleanup)
@router.delete("/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_product(product_id: str):
    # Retrieve product along with its associated product_image records
    product = await prisma.product.find_unique(
        where={"id": product_id},
        include={"images": True}
    )

    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found"
        )

    # 1. Delete associated images from Cloudinary
    if hasattr(product, "images") and product.images:
        for img in product.images:
            if img.image:
                delete_from_cloud(img.image)

    # 2. Remove child image records from DB
    await prisma.product_image.delete_many(where={"product_id": product_id})

    # 3. Delete product record from DB
    await prisma.product.delete(where={"id": product_id})

    return None