import React from "react";
import PokeCard from "./PokeCard";

const PokeDex = ({ pokemons, totalExp, isWinner, asd }) => {
  if (pokemons !== undefined) {
    let title = isWinner
      ? `Winner:Total EXP : ${totalExp}`
      : `Loser:Total EXP : ${totalExp}`;
    const renderPokemon = pokemons.map((pokemon) => {
      return <PokeCard pokemon={pokemon} key={pokemon.id} />;
    });
    return (
      <>
        <h2 className="title">{title}</h2>
        <div className="pokemonContainer">{renderPokemon}</div>
      </>
    );
  } else {
    return null;
  }
};

export default PokeDex;
