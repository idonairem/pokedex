import React, { useState } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");

  // Función para obtener el pokemon de la API
  const fetchPokemon = async (name) => {
    try {
      // Limpiar el mensaje de error si hay alguno
      setError("");

      // Realizar la llamada a la API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      
      // Si la respuesta no es válida, arrojar error
      if (!response.ok) throw new Error("Pokémon no encontrado");

      // Obtener los datos en formato JSON
      const data = await response.json();

      // Formatear los datos para mostrarlos
      const formattedData = {
        name: data.name,
        sprite: data.sprites.front_default,
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      };

      setPokemonData(formattedData); // Actualizar el estado con los datos del Pokémon
    } catch (error) {
      setError(error.message); // Si hay un error, mostrarlo
      setPokemonData(null); // Limpiar los datos previos del Pokémon
    }
  };

  return (
    <div className="App">
      <Pokedex fetchPokemon={fetchPokemon} pokemonData={pokemonData} error={error} />
    </div>
  );
}

export default App;
