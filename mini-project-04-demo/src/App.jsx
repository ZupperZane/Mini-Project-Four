import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) throw new Error("failed to fetch");
      const myData = await response.json();
      setData(myData);
      setError(null);
      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Mini Project 04</h1>
      {isLoading && <h1 className="text-7xl">Loading data ... please wait</h1>}
      {!isLoading && data && (
        <ul className="m-10 p-3">
          {data.map((d, index) => (
            <li key={index} className="text-3xl">
              {d.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
