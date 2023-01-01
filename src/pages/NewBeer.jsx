import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    first_brewed: "",
    attenuation_level: "",
    description: "",
    contributed_by: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, beer)
      .then(() => {
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={beer.name}
          onChange={(event) => {
            setBeer({ ...beer, name: event.target.value });
          }}
        ></input>
        <label>Tagline</label>
        <input
          value={beer.tagline}
          onChange={(event) => {
            setBeer({ ...beer, tagline: event.target.value });
          }}
        ></input>
        <label>First Brewed</label>
        <input
          value={beer.first_brewed}
          onChange={(event) => {
            setBeer({ ...beer, first_brewed: event.target.value });
          }}
        ></input>
        <label>Attenuation Level</label>
        <input
          type="number"
          value={beer.attenuation_level}
          onChange={(event) => {
            setBeer({ ...beer, attenuation_level: event.target.value });
          }}
        ></input>
        <label>Description</label>
        <input
          value={beer.description}
          onChange={(event) => {
            setBeer({ ...beer, description: event.target.value });
          }}
        ></input>
        <label>Contributed By</label>
        <input
          value={beer.contributed_by}
          onChange={(event) => {
            setBeer({ ...beer, contributed_by: event.target.value });
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBeer;
