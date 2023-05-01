import axios from "axios";
import { useEffect, useState } from "react";
import "../swiper.css"


const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    await axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="card">
      <div className="data">
        <p>{pokemon.name}</p>
       
      </div>
    </div>
  );
};

export default Card;
