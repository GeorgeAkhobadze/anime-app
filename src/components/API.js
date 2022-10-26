import axios from "axios";

export const getAllAnime = async () => {
  const result = await axios.get("https://api.jikan.moe/v4/anime");
  return result;
};

export const getRecentAnimeRecommendations = async () => {
  const result = await axios.get(
    "https://api.jikan.moe/v4/recommendations/anime?page=1"
  );
  return result;
};

export const getRandomAnime = async () => {
  const result = await axios.get("https://api.jikan.moe/v4/random/anime");
  return result;
};

export const getSingleAnime = async (id) => {
  const result = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  return result;
};
