import React, { useState } from "react";

const Peliculas = ()=>{

    let pelis = ['Lord of the rings','la haine','The Hatefull Eight','Inception','Scarface','Lord of the rings']
    let nueva = "Avatar 3"
    const [movies,setMovies] = useState(['Lord of the rings','la haine','The Hatefull Eight','Inception','Scarface','Lord of the rings'])

    function addMovie(){
        console.log('addMovie')
        console.log(pelis)
        pelis.push(nueva)
        console.log(pelis)

        // movies.push(nueva)
        setMovies([...movies,nueva])
        console.log(movies)
    }
    return(
        <>
            <h1>Componente Peliculas    </h1>
            <p>{nueva}</p>
            <h1>Variable sin memoria (LOKI)</h1>
            <div>{pelis.map( (pelicula,index)=>  <p key={index} >Pelicula {index}: {pelicula} </p> )}</div>

            <h1>Variable con memoria / Estado (THOR)</h1>
            <div>{movies.map( (pelicula,index)=>  <p key={index} >Pelicula {index}: {pelicula} </p> )}</div>
            
            <button onClick={addMovie}  >Agregar pelicula</button>
        </>
    )
}

export default Peliculas

// PSEUDOCODIGO
// DONE: mostrar una lista tareas
// DONE: agregar un input de tarea
// DONE: identificar cuando el usuairo da enter
// DONE: tomar el valor del input
// DONE: agregar unn elemento a la lista
// DONE: mostrar el total de elementos en una lista
// eliminar un elemento de una lista
// cuando hago over sobre una tarea mostrar boton
// estilos