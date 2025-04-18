const API_KEY = "live_uAwSKOnAoi3HwsQFSb5YR4d81FarlotKluaRjTBPfW3JoAzL8Go0VeKfWbecKR3S"; 
const BASE_URL = "https://api.thedogapi.com/v1";

const headers = {
  "x-api-key": API_KEY,
};

export const getBreeds = async () => {
  const response = await fetch(`${BASE_URL}/breeds`, { headers });
  const data = await response.json();
  return data;
};

export const getImageById = async (imageId) => {
  const response = await fetch(`${BASE_URL}/images/${imageId}`, { headers });
  const data = await response.json();
  return data.url;
};


