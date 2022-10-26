import styled from "styled-components";

export const HighlightedAnimesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 500px;
  .highlighted-anime-1 {
    grid-area: 1 / 1 / 6 / 3;
    margin-bottom: 10px;
  }
  .highlighted-anime-2 {
    grid-area: 1 / 3 / 3 / 5;
  }
  .highlighted-anime-3 {
    grid-area: 3 / 3 / 5 / 5;
  }
  .highlighted-anime-4 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .highlighted-anime-5 {
    grid-area: 2 / 5 / 5 / 6;
  }
`;

export const HighlightedAnime = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: ${(props) =>
    props.loading ? "gradient-animation 2s ease infinite;" : ""};
    background-image : ${(props) =>
      props.loading
        ? "linear-gradient(90deg,#030303,#292929,#030303,#292929);"
        : `linear-gradient(0deg, rgba(7,7,7,1) 0%, rgba(255, 255, 255, 0) 40% ), url(${props.animeImg});`}

  background-size: ${(props) => (props.loading ? "300% 100%;" : "cover;")}
  background-repeat: no-repeat;
  padding-bottom: 5%;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
        0deg,
        rgba(189, 0, 255, 1) 0%,
        rgba(255, 255, 255, 0) 40%
      ),
      url("${(props) => props.animeImg}");
  }

  @keyframes gradient-animation {
    0% { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
  }
`;

export const HighlightedAnimeTitle = styled.p`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  margin: 0px;
  text-align: center;
  color: #fcfcfc;
`;

export const StyledArticleHeader = styled.h3`
  font-size: 36px;
  margin-bottom: 14px;
  color: #fcfcfc;
  font-family: "Roboto";
`;
