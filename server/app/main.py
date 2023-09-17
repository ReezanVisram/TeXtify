from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .router import transcription, document

app = FastAPI()
app.include_router(transcription.router)
app.include_router(document.router)
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "teXify API v1"}
