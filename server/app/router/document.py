from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from ..adapters.database.mongo import MongoClient
from ..adapters.database.models.document import Document, UpdateDocument
from ..service.document import DocumentService
from ..lib.config import MONGODB_URI

mongo_client = MongoClient(MONGODB_URI)
document_service = DocumentService(mongo_client)

router = APIRouter()


@router.get("/documents", tags=["document"])
async def get_documents_route():
    documents = await document_service.get_documents()
    return {"documents": documents}


@router.post("/document", tags=["document"])
async def create_document_route(document: Document):
    document = jsonable_encoder(document)
    new_document = await document_service.create_document(document)
    return {"new_document": new_document}


@router.put("/document/{id}/save", tags=["document"])
async def save_document_route(id: str, document: UpdateDocument):
    new_document = await document_service.update_document(id, document)
    return {"updated_document": document}
