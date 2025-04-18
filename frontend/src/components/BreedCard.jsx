import { Link } from "react-router-dom";

function BreedCard({ breed, imageUrl }) {
  return (
    <Link to={`/breed/${breed.id}`} className="breed-card-link">
      <div className="breed-card">
        <img src={imageUrl} alt={breed.name} />
        <h3>{breed.name}</h3>
        {/* Additional breed info */}
      </div>
    </Link>
  );
}


