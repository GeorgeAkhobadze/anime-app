import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllAnime } from "../API";
import {
  HighlightedAnimesContainer,
  HighlightedAnimeTitle,
  StyledContainer,
  HighlightedAnime,
  StyledArticleHeader,
} from "./MainPage.styles";

const MainPage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAnime()
      .then((res) => setAnimeList(res.data.data))
      .finally(() => {
        setLoading(false);
      });
  });

  const navigate = useNavigate();

  if (loading) {
    return (
      <StyledContainer>
        <StyledArticleHeader>Trending</StyledArticleHeader>
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
      </StyledContainer>
    );
  }

  console.log(animeList);
  return (
    <StyledContainer>
      <StyledArticleHeader>Trending</StyledArticleHeader>
      <HighlightedAnimesContainer>
        {animeList?.slice(0, 5).map((anime, index) => {
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
        })}
      </HighlightedAnimesContainer>
    </StyledContainer>
  );
};

export default MainPage;
