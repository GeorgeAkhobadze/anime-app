import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainPage from "./components/mainPage/MainPage.js";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/animes" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
