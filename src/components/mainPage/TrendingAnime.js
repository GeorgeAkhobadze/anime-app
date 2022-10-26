import { useEffect, useState } from "react";
import {
  HighlightedAnimesContainer,
  HighlightedAnimeTitle,
  HighlightedAnime,
} from "./MainPage.styles";
import { getAllAnime, getRecentAnimeRecommendations } from "../API";
import { StyledContainer } from "../common/common.styled";
import { useNavigate } from "react-router";

const TrendingAnimes = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getRecentAnimeRecommendations()
      .then((res) => setAnimeList(res.data.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //   animeList.map((anime) => {
  //     console.log(anime);
  //   });
  console.log(animeList);

  if (loading) {
    return (
      <HighlightedAnimesContainer>
        <HighlightedAnime loading={"true"} className={`highlighted-anime-1`}>
          <HighlightedAnimeTitle></HighlightedAnimeTitle>
        </HighlightedAnime>
        <HighlightedAnime loading={"true"} className={`highlighted-anime-2`}>
          <HighlightedAnimeTitle></HighlightedAnimeTitle>
        </HighlightedAnime>
        <HighlightedAnime loading={"true"} className={`highlighted-anime-3`}>
          <HighlightedAnimeTitle></HighlightedAnimeTitle>
        </HighlightedAnime>
        <HighlightedAnime loading={"true"} className={`highlighted-anime-4`}>
          <HighlightedAnimeTitle></HighlightedAnimeTitle>
        </HighlightedAnime>
        <HighlightedAnime loading={"true"} className={`highlighted-anime-5`}>
          <HighlightedAnimeTitle></HighlightedAnimeTitle>
        </HighlightedAnime>
      </HighlightedAnimesContainer>
    );
  }

  return (
    <HighlightedAnimesContainer>
      {/* {animeList?.slice(0, 5).map((anime, index) => {
        return (
          <HighlightedAnime
            key={index}
            animeImg={anime.images.jpg.large_image_url}
            className={`highlighted-anime-${index + 1}`}
            onClick={() => navigate(`/animes/${anime.mal_id}`)}
          >
            <HighlightedAnimeTitle>{anime.title}</HighlightedAnimeTitle>
          </HighlightedAnime>
        );
      })} */}
    </HighlightedAnimesContainer>
  );
};

export default TrendingAnimes;
