import { useCallback, useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  //Filter 1 is the Category
  const [filter1, setFilter1] = useState("title");
  //Search
  const searchQuery = "" ;
  //Filtered Data
const filteredData = data.filter(movie =>
  String(movie[filter1] ?? "")
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
);
  //Fetch Function
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "./public/movie.json",
      );
      if (!response.ok) throw new Error("failed to fetch");
      const myData = await response.json();
      setData(myData);
      setError(null);
      console.log(myData);
    } catch (err) {
      setError(err);
      console.log(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
<>
    <select value ={filter1}  onChange={(e) => setFilter1(e.target.value)}>
      <option value="title">Title</option>
      <option value="director">Director</option>
      <option value="releasing_year">Year Released</option>
      <option value="language">Language</option>
      <option value="runtime">Runtime</option>
      <option value="age_group">Age Group</option>
      <option value="short_description">Description</option>
      <option value="genre">Genre</option>
      <option value="budget">Budget</option>
      <option value="imdb_rating">Rating (IMDB)</option>
    </select>

    <search>
      
    </search>

      {isLoading && <h1 className="text-7xl">Loading data ... please wait</h1>}
      {!isLoading && data && (
        <ul className="m-10 p-3">
         {data.map((d, index) => (
  <li key={index} className="text-3xl">
    {d[filter1]}
  </li>
))}

        </ul>
      )}
    </>
  );
};

export default App;
