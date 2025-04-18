import React from "react";
import { useBreedContext } from "../contexts/BreedContext";
import BreedCard from "../components/BreedCard";
import "../css/Home.css";

function Favorites() {
  const { favorites } = useBreedContext();

  if (favorites.length === 0) {
    return <div className="loading">No favorites yet.</div>;
  }

  return (
    <div className="breeds-grid">
      {favorites.map((breed) => (
        <BreedCard
          key={breed.id}
          breed={breed}
          imageUrl={breed.imageUrl}
        />
      ))}
    </div>
  );
}

export default Favorites;
