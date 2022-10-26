import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainPage from "./components/mainPage/MainPage.js";
import Header from "./components/header/Header";
import { Navigate, Route, Routes } from "react-router";
import AnimePage from "./components/animePage/AnimePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/animes" />} />
        <Route path="/animes/:id" element={<AnimePage />} />
        <Route path="/animes" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
