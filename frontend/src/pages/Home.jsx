import React, { useState, useEffect } from "react";
import { getBreeds, getImageById } from "../services/api";
import BreedCard from "../components/BreedCard";
import "../css/Home.css";

function Home() {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const breedData = await getBreeds();
        setBreeds(breedData);

        const imagePromises = breedData.map(async (breed) => {
          if (breed.reference_image_id) {
            const imageUrl = await getImageById(breed.reference_image_id);
            return { id: breed.id, url: imageUrl };
          }
          return { id: breed.id, url: null };
        });

        const imageResults = await Promise.all(imagePromises);
        const imageMap = {};
        imageResults.forEach(({ id, url }) => {
          imageMap[id] = url;
        });
        setImages(imageMap);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) {
    return <div className="loading">Loading breeds...</div>;
  }

  return (
    <div className="breeds-grid">
      {breeds.map((breed) => (
        <BreedCard
          key={breed.id}
          breed={breed}
          imageUrl={images[breed.id]}
        />
      ))}
    </div>
  );
}

export default Home;



