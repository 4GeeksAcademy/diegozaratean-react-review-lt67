import React, { useEffect, useState } from "react";

const Getdata = () => {
  const frutas = [{ name: "pera" }, { name: "manzana" }];
  const [characters, setCharacters] = useState([]);
  function getCharacters() {
    console.log("getCharacters");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
    //   .then((data) => console.log(data.results));
  }
  useEffect(() => {
    console.log("Estamos listos");
    getCharacters();
  }, []);

  return (
    <>
      <h1>Getdata</h1>

      {characters.map((character) => (
        <p key={character.id}>
          personaje {character.id} : <b>{character.name}</b>
          <img src={character.image} alt={character.name} />
        </p>
      ))}

      {/* <p>{characters}</p> */}
    </>
  );
};

export default Getdata;
