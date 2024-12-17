import React, { useState } from "react";
import "./Pokedex.css";
import PokemonInfo from "./PokemonInfo";

function Pokedex({ fetchPokemon, pokemonData, error }) {
  const [pokemonName, setPokemonName] = useState("");

  // Manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setPokemonName(e.target.value);
  };

  // Manejar el clic del botón de búsqueda
  const handleSearch = () => {
    if (pokemonName.trim() === "") return; // Si el campo está vacío, no hacer nada
    fetchPokemon(pokemonName); // Buscar Pokémon
  };

  return (
    <div className="pokedex">
      <div className="pokedex-screen">
        {error && <h2 className="error-text">{error}</h2>} {/* Mostrar error si ocurre */}
        {pokemonData ? (
          <PokemonInfo pokemonData={pokemonData} />
        ) : (
          !error && <h2 className="default-text">Busca un Pokémon</h2>
        )}
      </div>

      <div className="pokedex-input">
        <input
          type="text"
          placeholder="Introduce un Pokémon"
          value={pokemonName}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}

export default Pokedex;
