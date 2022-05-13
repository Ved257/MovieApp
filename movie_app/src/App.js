import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV_Shows from "./pages/TV_Shows";
import NAP from "./pages/NAP"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/tv" element={<TV_Shows/>} />
          <Route path="/newAndPopular" element={<NAP/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
