import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        const data = result.data;
        setBeer(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [id]);
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

export default SingleBeer;
