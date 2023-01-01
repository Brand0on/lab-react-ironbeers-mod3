import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        const data = result.data;
        setBeers(data);
      })

      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <strong>
        {beers.map((beer) => {
          return (
            <div>
              <ul>
                <li key="each-beer">
                  <Link to={`/beers/${beer._id}`}>
                    <img
                      style={{ height: "100px" }}
                      src={beer.image_url}
                      alt={beer.name}
                    />
                    <br />
                    <strong>Name: {beer.name}</strong>
                    <br />

                    <strong>Tagline: {beer.tagline}</strong>
                    <br />

                    <strong>Contributed_by: {beer.contributed_by}</strong>
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </strong>
    </div>
  );
};

export default Beers;
