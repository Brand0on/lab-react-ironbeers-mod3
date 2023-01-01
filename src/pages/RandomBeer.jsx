import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        const data = result.data;
        setBeer(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    beer && (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h2>{beer.name}</h2>
        <i>{beer.tagline}</i>
        <b>{beer.first_brewed}</b>
        <b>{beer.attenuation_level}</b>
        <p>{beer.description}</p>
        <i>{beer.contributed_by}</i>
      </div>
    )
  );
};

export default RandomBeer;
