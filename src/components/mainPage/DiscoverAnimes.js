import { useEffect, useState } from "react";
import { getAllAnime, getRandomAnime } from "../API";

export const DiscoverAnimes = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getAllAnime().then((res) => {
      setAnimeList(res.data);
    });
  }, []);

  // console.log(animeList, "All Anime");

  return (
    <div>
      <div></div>
    </div>
  );
};

export default DiscoverAnimes;
