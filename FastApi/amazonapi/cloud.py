import os
import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
from dotenv import load_dotenv

load_dotenv()

cloudinary.config(
    cloud_name=os.getenv('CLOUD_NAME'),
    api_key=os.getenv('CLOUD_API_KEY'),
    api_secret=os.getenv('CLOUD_API_SECRET')
)

def upload_to_cloud(file_path):
    try:
        res = cloudinary.uploader.upload(file_path)
        print("Res is ")
        print(res)
        return res.get("secure_url")
    except Exception as e:
        print(f"Failed to upload file error is")
        print(e)
        return None

def extract_public_id(image_url: str):
    """Extracts public_id from Cloudinary URL (e.g. https://res.cloudinary.com/.../v12345/sample.jpg -> sample)"""
    try:
        filename = image_url.split('/')[-1]
        public_id = filename.split('.')[0]
        return public_id
    except Exception:
        return None

def delete_from_cloud(image_url: str):
    try:
        public_id = extract_public_id(image_url)
        if not public_id:
            return False
        res = cloudinary.uploader.destroy(public_id)
        print("Cloudinary destroy response:", res)
        return res.get("result") == "ok"
    except Exception as e:
        print(f"Failed to delete file from Cloudinary error is: {e}")
        return False