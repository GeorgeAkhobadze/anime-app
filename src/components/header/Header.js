import { useNavigate } from "react-router";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon.svg";
const StyledHeader = styled.div.attrs(() => ({
  className: "container",
}))`
  height: 80px;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-nav-list {
    display: flex;
    align-items: center;
    gap: 30px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin: 0px;
    padding: 0px;
  }

  .header-nav-list__item {
    list-style-type: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.2s;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid rgba(189, 0, 255, 1);
    }
  }

  .header-navigation-section {
    display: flex;
    gap: 25px;
  }

  .header-logo {
    width: 150px;
    cursor: pointer;
  }
  .search-input--container {
    display: flex;

    position: relative;
    .search-icon {
      position: absolute;
      right: 5px;
      top: 25%;
      cursor: pointer;
    }

    input {
      background-color: #302d2d !important;
      border: none;
      border-radius: 5px;
      position: relative;
      padding-left: 10px;
      padding-right: 35px;
      color: #fff;
      font-family: "Roboto";

      &:focus {
        outline: none;
      }
    }
  }
`;

const StyledHeaderButton = styled.button`
  outline: none;
  border: none;
  font-family: "Roboto";
  padding: 0px 30px;

  color: #FFF;
  border: 2px solid #bd00ff;
  background-color: ${(props) =>
    props.light ? "#BD00FF;" : "rgba(48, 45, 45, 0.17);"}
  box-sizing: border-box;
  border-radius: 5px;
  height: 42px;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <img
        className="header-logo"
        src={logo}
        onClick={() => navigate("/animes")}
      />
      <div className="header-navigation-section">
        <ul className="header-nav-list">
          <li
            className="header-nav-list__item"
            onClick={() => navigate("/animes")}
          >
            Home
          </li>
          <li className="header-nav-list__item">Characters</li>
          <li className="header-nav-list__item">About</li>
        </ul>
        <div className="search-input--container">
          <input className="search-input" type="text" placeholder="Search..." />
          <img className="search-icon" src={searchIcon} alt="Search" />
        </div>

        <StyledHeaderButton light>Sign Up</StyledHeaderButton>
        <StyledHeaderButton>Sign in</StyledHeaderButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
