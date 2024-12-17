import React from "react";

function PokemonInfo({ pokemonData }) {
  return (
    <div className="pokemon-info">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprite} alt={pokemonData.name} />
      <ul>
        {pokemonData.stats.map((stat, index) => (
          <li key={index}>
            <strong>{stat.name}:</strong> {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonInfo;
