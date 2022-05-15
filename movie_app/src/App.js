import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV_Shows from "./pages/TV_Shows";
import NAP from "./pages/NAP";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV_Shows />} />
          <Route path="/newAndPopular" element={<NAP />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
