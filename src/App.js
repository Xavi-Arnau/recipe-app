import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home";
import Favorites from "./favorites";
import Details from "./details";
import GlobalState from "./context";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-item/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
