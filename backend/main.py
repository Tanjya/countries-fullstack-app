from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class CountryCreate(BaseModel):
    name: str

countries = [
    {"id": 1, "name": "Algeria"},
    {"id": 2, "name": "United Kingdom"},
    {"id": 3, "name": "Canada"}
]

@app.get("/countries")
def get_countries():
    return countries

@app.get("/countries/{country_id}")
def get_country(country_id: int):
    for country in countries:
        if country["id"] == country_id:
            return country

    raise HTTPException(status_code=404, detail="Country not found")

@app.post("/countries", status_code=201)
def create_country(country: CountryCreate):
    new_country = {
        "id": len(countries) + 1,
        "name": country.name
    }

    countries.append(new_country)

    return new_country