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

The backend exposes REST API endpoints that allow the frontend to retrieve, create, update and delete countries.

Data is sent between the frontend and backend using JSON.

The project currently uses an in-memory Python list to store countries, so the data resets when the backend server restarts.

CORS is configured on the FastAPI backend to allow requests from the React frontend while running locally.

## Running the Project

### Backend

From the `backend` folder, activate the virtual environment:

```bash
source venv/bin/activate
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend

From the `frontend` folder:

```bash
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Testing

I tested the API endpoints using HTTPie before connecting the backend to the React frontend.

For example:

```bash
http GET http://127.0.0.1:8000/countries
```

```bash
http POST http://127.0.0.1:8000/countries name=France
```

This allowed me to test the backend independently before connecting it to the frontend.

## What I Practised

Through this project I practised:

- Building REST API endpoints using FastAPI
- CRUD operations
- Working with HTTP methods including GET, POST, PUT and DELETE
- Testing API endpoints using HTTPie
- Sending HTTP requests from React using `fetch()`
- Managing React state with `useState`
- Fetching data when a component loads using `useEffect`
- Working with TypeScript types
- Sending and receiving JSON data
- Using Pydantic to validate request data
- Handling errors such as 404 responses
- Configuring CORS between the frontend and backend
- Using Git and GitHub throughout development

## Future Improvements

If I continued developing the project, I would:

- Add a database so country data persists when the backend restarts
- Add more validation and error handling
- Deploy the React frontend and FastAPI backend
- Add automated tests
- Improve the user interface
