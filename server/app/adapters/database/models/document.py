from pydantic import BaseModel, Field
from bson.objectid import ObjectId
from typing import Optional
from .pyobjectid import PyObjectId


class Section(BaseModel):
    subheading: str = Field(...)
    latex_content: list[str] = Field(...)


class UpdateSection(BaseModel):
    subheading: Optional[str]
    latex_content: Optional[list[str]]


class Document(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str = Field(...)
    sections: list[Section] = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class UpdateDocument(BaseModel):
    title: Optional[str]
    sections: Optional[list[UpdateSection]]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
