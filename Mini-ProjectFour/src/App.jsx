import { useEffect, useState } from "react";
import "./App.css";
import myImage from "./assets/MoiveIcon.png"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  //Filter 1 is the Category
  const [filter1,setFilter1] = useState("title");
  //Search
  const [searchQuery,setSearchQuery] = useState(" ")
  //Filtered Data
      const filteredData = data.filter(movie =>
    movie[filter1]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  //Fetch Function
  async function fetchData() {
    try {
      const response = await fetch(
        "./public/movie.json",
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
<div className="navbar bg-grey border border-gray-300 shadow-sm flex flex-row items-center gap-4 p-3 rounded-box mx-4 mt-4">
  <a class="btn btn-ghost text-xl">Movie Wishlister</a>

    <select value ={filter1} onChange={(e) => setFilter1(e.target.value)} 
      className="border border-gray-300 rounded p-1"
      >
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

    <input type="search" onChange={(e) => setSearchQuery(e.target.value)}
    className="border border-gray-300 rounded p-1" />

    <img src={myImage}/>
</div>
    {!isLoading && data && (
       filteredData.length === 0 ? (
      <h2 >No results found for {filter1} : {searchQuery}</h2>
      ) : (
      <ul className="m-10 p-3">
       {filteredData.map((d, index) => (
          <li key={index} className="text-3xl">
            <center>
              {d["title"]}
              </center>
            {d[filter1]}
            <button>
             <p>Add To Wishlist</p>
            </button>
          </li>
      ))}
    </ul>
  )
)}
    </>
  );
};

export default App;
