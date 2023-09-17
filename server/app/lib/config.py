import os
from dotenv import load_dotenv

load_dotenv()

COHERE_API_KEY = os.getenv("COHERE_API_KEY")
MONGODB_URI = os.getenv("MONGODB_URI")
