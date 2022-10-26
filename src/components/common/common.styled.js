import styled from "styled-components";

export const StyledContainer = styled.div.attrs(() => ({
  className: "container",
}))`
  section:first-child {
    padding-top: 60px;
  }
`;

export const StyledSectionContainer = styled.section`
  padding: 30px 0px;
`;
