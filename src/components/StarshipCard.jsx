
/* eslint-disable react/prop-types */
function StarshipCard({ starship }) {
  //render the starship details
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost: {starship.cost_in_credits} credits</p>
      <p>Length: {starship.length} meters</p>
    </div>
  );
}

export default StarshipCard;