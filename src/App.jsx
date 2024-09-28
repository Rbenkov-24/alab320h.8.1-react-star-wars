import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  //state to hold the list of starships
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    //function to fetch starships from the API
    const fetchStarships = async () => {
      const data = await getAllStarships();
      setStarships(data);
    };
    fetchStarships();
  }, []);

  return (
    <div className="app">
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;