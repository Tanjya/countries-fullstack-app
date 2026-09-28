import { useEffect, useState } from "react";

type Country = {
  id: number;
  name: string;
};

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

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
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
