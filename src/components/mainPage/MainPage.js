import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  StyledContainer,
  StyledSectionContainer,
} from "../common/common.styled";
import { StyledArticleHeader } from "./MainPage.styles";
import TrendingAnimes from "./TrendingAnime";
import DiscoverAnimes from "./DiscoverAnimes";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledSectionContainer>
        <StyledArticleHeader>Trending</StyledArticleHeader>
        <TrendingAnimes />
      </StyledSectionContainer>

      <StyledSectionContainer>
        <StyledArticleHeader>Discover</StyledArticleHeader>
        <DiscoverAnimes />
      </StyledSectionContainer>
    </StyledContainer>
  );
};

export default MainPage;
