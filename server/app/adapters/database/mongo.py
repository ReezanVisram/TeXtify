import motor.motor_asyncio


class MongoClient:
    def __init__(self, mongo_uri):
        print(f"Mongo URI: {mongo_uri}")
        self.client = motor.motor_asyncio.AsyncIOMotorClient(mongo_uri)
        self.db = self.client.textify

    async def get_documents(self):
        documents = await self.db["documents"].find().to_list(1000)
        return documents

    async def create_document(self, document):
        new_document = await self.db["documents"].insert_one(document)
        created_document = await self.db["documents"].find_one({"_id": new_document.inserted_id})
        return created_document

    async def update_document(self, id, document):
        document = {k: v for k, v in document.dict().items() if v is not None}

        if (len(document)) >= 1:
            update_result = await self.db["documents"].update_one({"_id": id}, {"$set": document})

            if update_result.modified_count == 1:
                if updated_document := await self.db["documents"].find_one({"_id": id}) is not None:
                    return updated_document

        if existing_document := await self.db["documents"].find_one({"_id": id}) is not None:
            return existing_document
