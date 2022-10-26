import axios from "axios";

export const getAllAnime = async () => {
  const result = await axios.get("https://api.jikan.moe/v4/anime");
  return result;
};
