# Countries Full-Stack App

A simple full-stack CRUD application for managing countries.

I built this project to practise connecting a React and TypeScript frontend to a Python backend using FastAPI and REST APIs.

## Technologies

### Frontend
- React
- TypeScript
- Vite

### Backend
- Python
- FastAPI
- Pydantic
- Uvicorn

### Testing
- HTTPie

## Features

The application supports CRUD operations:

- View all countries
- View a country by ID
- Add a new country
- Update an existing country
- Delete a country

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/countries` | Get all countries |
| GET | `/countries/{id}` | Get a country by ID |
| POST | `/countries` | Create a country |
| PUT | `/countries/{id}` | Update a country |
| DELETE | `/countries/{id}` | Delete a country |

## How It Works

The frontend is built with React and TypeScript. It communicates with the FastAPI backend using HTTP requests with `fetch()`.

The backend exposes REST API endpoints that allow the frontend to retrieve, create, update and delete countries. Data is returned to the frontend as JSON.

The project currently uses an in-memory Python list to store countries, so the data resets when the backend server restarts.

## Running the Project

### Backend

From the `backend` folder:

```bash
source venv/bin/activate
uvicorn main:app --reload
