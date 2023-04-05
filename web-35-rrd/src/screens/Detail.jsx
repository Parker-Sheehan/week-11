import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = (params) => {
  const { itemId } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${itemId}`).then((res) => {
      setPokemon(res.data);
    });
  }, [itemId]);

  return (
    <div>
      <h2>{itemId}</h2>
      <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} />
    </div>
  );
};

export default Detail;
