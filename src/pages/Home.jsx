import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Check all the beers</h1>
      <img src="./../assets/beers.png" alt="All beers photo" />
      <Link className="link" to="/beers">
        All beers
      </Link>
      <br />
        <h1>Discover a random beer!</h1>
      <img src="./../assets/new-beer.png" alt="Random beer" />

      <Link className="link" to="/random-beer">
        Random Beer
      </Link>
      <br />

        <h1></h1>
      <Link className="link" to="/new-beer">
        Create a new beer
      </Link>
    </div>
  );
}

export default Home;
