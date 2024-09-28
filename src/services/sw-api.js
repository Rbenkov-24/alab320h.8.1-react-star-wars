
const SWAPI_URL = 'https://swapi.dev/api/starships/';

//function to fetch starships from the Star Wars API
export const getAllStarships = async () => {
  try {
    const response = await fetch(SWAPI_URL);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching starships:', error);
    return []; 
  }
};