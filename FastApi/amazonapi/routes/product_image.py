from datetime import datetime, timezone
from fastapi import APIRouter, status, Request, HTTPException, Form, UploadFile, File
from pydantic import BaseModel, EmailStr
from typing import Optional
from db import prisma
from pathlib import Path
import shutil
from cloud import upload_to_cloud, delete_from_cloud

router = APIRouter()

UPLOAD_DIR = Path('uploads')
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

# 1 & 4. UPLOAD IMAGE (with try...finally local file cleanup)
@router.post("/upload", status_code=201)
async def upload_file(product_id: str = Form(...), document: UploadFile = File(...)):
    print(f'received file for product id', product_id)

    product = await prisma.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(status_code=400, detail=f"Product with id {product_id} not found")

    original_file = Path(document.filename)
    f_name = original_file.stem
    f_ext = original_file.suffix
    ts = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")

    unique_filename = f"{f_name}_{ts}{f_ext}"
    file_path = UPLOAD_DIR / unique_filename

    try:
        # Write to temporary local storage
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(document.file, buffer)

        # Upload to Cloudinary
        image_link = upload_to_cloud(file_path=file_path)

        if not image_link:
            raise HTTPException(status_code=500, detail="Failed to upload image to cloud.")

        # Save record in Prisma DB
        new_product_image = await prisma.product_image.create(data={
            "product_id": product_id,
            "image": image_link
        })

        return {
            "message": "File received successfully",
            "product_id": product_id,
            "filename": unique_filename,
            "upload": image_link,
            "new_product_image": new_product_image
        }

    finally:
        # Task 4: Ensure local file is always cleaned up even if errors occur
        if file_path.exists():
            file_path.unlink()


# 3. UPDATE / CHANGE PRODUCT IMAGE ROUTE
@router.put("/update/{image_id}", status_code=200)
async def update_product_image(image_id: str, document: UploadFile = File(...)):
    # Check if existing product_image record exists
    existing_img = await prisma.product_image.find_unique(where={"id": image_id})
    if not existing_img:
        raise HTTPException(status_code=404, detail=f"Product image record with id {image_id} not found")

    original_file = Path(document.filename)
    f_name = original_file.stem
    f_ext = original_file.suffix
    ts = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")

    unique_filename = f"{f_name}_{ts}{f_ext}"
    file_path = UPLOAD_DIR / unique_filename

    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(document.file, buffer)

        # Upload new image to Cloudinary
        new_image_link = upload_to_cloud(file_path=file_path)
        if not new_image_link:
            raise HTTPException(status_code=500, detail="Failed to upload new image to cloud.")

        # Delete old image from Cloudinary
        delete_from_cloud(existing_img.image)

        # Update database record
        updated_img = await prisma.product_image.update(
            where={"id": image_id},
            data={"image": new_image_link}
        )

        return {
            "message": "Product image updated successfully",
            "updated_product_image": updated_img
        }

    finally:
        if file_path.exists():
            file_path.unlink()