from ..adapters.database.mongo import MongoClient


class DocumentService:
    def __init__(self, mongo_client: MongoClient):
        self.mongo_client = mongo_client

    async def get_documents(self):
        documents = await self.mongo_client.get_documents()
        return documents

    async def create_document(self, document):
        new_document = await self.mongo_client.create_document(document)
        return new_document

    async def update_document(self, id, document):
        updated_document = await self.mongo_client.update_document(id, document)
        return updated_document
