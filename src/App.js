import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Navbar from "./pages/Navbar";
import SingleBeer from "./pages/SingleBeer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beers/:id" element={<SingleBeer />} />
          <Route path="/home" element={<Home />} />

          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
