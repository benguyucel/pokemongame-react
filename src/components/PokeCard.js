import React from "react";

const PokeCard = ({ pokemon }) => {
  return (
    <div className="pokemonItem">
      <span className="pokeTitle">{pokemon.name}</span>
      <div className="pokemonImage">
        <img
          src={`https://img.pokemondb.net/artwork/vector/large/${pokemon.name.toLowerCase()}.png`}
          alt=""
        />
        <p className="type">TYPE : {pokemon.type}</p>
        <p className="type">EXP : {pokemon.base_experience}</p>
      </div>
    </div>
  );
};

export default PokeCard;
