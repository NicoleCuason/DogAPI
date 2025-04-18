import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { BreedProvider } from "./contexts/BreedContext";
import BreedDetail from "./pages/BreedDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BreedProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/breed/:id" element={<BreedDetail/>}/>
        </Routes>
      </main>
    </BreedProvider>
  );
}

export default App;




