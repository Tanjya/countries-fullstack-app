import { useEffect, useState } from "react";

type Country = {
  id: number;
  name: string;
};

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [newCountry, setNewCountry] = useState("");
  async function addCountry() {
  const response = await fetch("http://127.0.0.1:8000/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newCountry,
    }),
  });

  const createdCountry = await response.json();

  setCountries([...countries, createdCountry]);
  setNewCountry("");
}

async function deleteCountry(id: number) {
  await fetch(`http://127.0.0.1:8000/countries/${id}`, {
    method: "DELETE",
  });

  setCountries(countries.filter((country) => country.id !== id));
}

async function updateCountry(id: number) {
  const newName = prompt("Enter the new country name:");

  if (!newName) {
    return;
  }

  const response = await fetch(`http://127.0.0.1:8000/countries/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
    }),
  });

  const updatedCountry = await response.json();

  setCountries(
    countries.map((country) =>
      country.id === id ? updatedCountry : country
    )
  );
}

  useEffect(() => {
    async function getCountries() {
      const response = await fetch("http://127.0.0.1:8000/countries");
      const data = await response.json();
      setCountries(data);
    }

    getCountries();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <input
        value={newCountry}
        onChange={(event) => setNewCountry(event.target.value)}
        placeholder="Enter a country"
      />

<button onClick={addCountry}>Add</button>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            {country.name}

            <button onClick={() => updateCountry(country.id)}>
              Edit
            </button>

            <button onClick={() => deleteCountry(country.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
