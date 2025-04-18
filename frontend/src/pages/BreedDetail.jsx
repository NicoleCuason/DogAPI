import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBreeds, getImageById } from "../services/api";


function BreedDetail() {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchBreed = async () => {
      const breeds = await getBreeds();
      const selectedBreed = breeds.find((b) => b.id.toString() === id);
      setBreed(selectedBreed);

      if (selectedBreed?.reference_image_id) {
        const url = await getImageById(selectedBreed.reference_image_id);
        setImageUrl(url);
      }
    };

    fetchBreed();
  }, [id]);

  if (!breed) return <div>Loading...</div>;

  return (
    <div className="breed-detail">
      <h2>{breed.name}</h2>
      {imageUrl && <img src={imageUrl} alt={breed.name} />}
      <p><strong>Bred for:</strong> {breed.bred_for || "N/A"}</p>
      <p><strong>Breed group:</strong> {breed.breed_group || "N/A"}</p>
      <p><strong>Life span:</strong> {breed.life_span}</p>
      <p><strong>Origin:</strong> {breed.origin || "Unknown"}</p>
      <p><strong>Temperament:</strong> {breed.temperament || "N/A"}</p>
    </div>
  );
}

export default BreedDetail;
