from fastapi import APIRouter, UploadFile, File
import uuid
import os

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    file_id = str(uuid.uuid4())

    file_path = f"{UPLOAD_FOLDER}/{file_id}.jpg"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    return {
        "message": "Image uploaded successfully",
        "file_id": file_id,
        "path": file_path
    }
