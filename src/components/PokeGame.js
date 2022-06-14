import React, { useEffect, useState } from "react";
import { pokemons } from "../data/data";
import PokeDex from "./PokeDex";

const Play = () => {
  let playerOne = [],
    playerTwo = [...pokemons];
  // separate randomly cards
  while (playerOne.length < playerTwo.length) {
    let randomIdx = Math.floor(Math.random() * playerTwo.length);
    let randomPokememon = playerTwo.splice(randomIdx, 1)[0];
    playerOne.push(randomPokememon);
  }
  // Calculate Handone Exp
  const handOneTotalExp = playerOne.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );
  // Calculate HandTwo Exp
  const handTwoTotalExp = playerTwo.reduce(
    (exp, pokemon) => exp + pokemon.base_experience,
    0
  );
  return { playerOne, playerTwo, handOneTotalExp, handTwoTotalExp };
};

const PokeGame = () => {
  const [game, setGame] = useState({});
  //Prepare For FirsPlay
  useEffect(() => {
    const firstPlay = Play();
    setGame(() => ({ ...firstPlay }));
  }, []);

  //Playagain
  const PlayAgain = () => {
    const playAgain = Play();
    setGame(() => ({ ...playAgain }));
  };
  let { playerOne, playerTwo, handOneTotalExp, handTwoTotalExp } = game;
  return (
    <>
      <div className="playAgainButton">
        <button
          onClick={() => {
            PlayAgain();
          }}
        >
          PLAY AGAIN
        </button>
      </div>
      <PokeDex
        pokemons={playerOne}
        totalExp={handOneTotalExp}
        isWinner={handOneTotalExp > handTwoTotalExp}
      />
      <PokeDex
        pokemons={playerTwo}
        totalExp={handTwoTotalExp}
        isWinner={handOneTotalExp < handTwoTotalExp}
      />
    </>
  );
};

export default PokeGame;
