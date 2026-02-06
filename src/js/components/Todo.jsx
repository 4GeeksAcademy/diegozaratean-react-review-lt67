import React, { useEffect, useState } from "react";

const Todo = ()=>{

    const [villanos, setVillanos]  = useState(['doc oc','duende verde','venom'])
    const [tareas, setTareas]  = useState([
        {
            "label": "tareas quemada 1",
            "is_done": false,
            "id": 3
        },
        {
            "label": "tareas quemada 2",
            "is_done": false,
            "id": 4
        }
    ])
    function getTask(){
        console.log('getTask')
        fetch('https://playground.4geeks.com/todo/users/spiderman')
        .then( (response)=> response.json())
        .then( (data)=> setTareas(data.todos) )
    }

    function addTask(){
        console.log('getTask')


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react",
                "is_done": false
                })
        };
        
        fetch('https://playground.4geeks.com/todo/todos/spiderman',requestOptions)
        .then( (response)=> response.json())
        .then( (data)=> {
            console.log(data)
            getTask()
            
        } )
    }

    function addVillian(){
        console.log('addVillian')
        // villanos.push('electro')
        setVillanos([...villanos ,'electro'])
    }

    function deleteTaks(idToDelete){
        console.log('deleteTaks id' + idToDelete)        


        getTask()
    }

    useEffect(()=>{

        console.log('El comopnente TODO esta listo para trabajar')
        getTask()
    },[])

    return (
        <>
            <h1>Tares de spiderman</h1>
            <button onClick={getTask}>Leer tareas</button>

            {villanos}
            <p>{villanos}</p>
            {villanos.map( (villano,index)=> <p key={index}> villano {index}:  {villano}</p> )}
            <button onClick={addVillian}>agregar villano</button>

            {tareas.map( (tarea)=> 
                <p key={tarea.id}> tarea {tarea.id}:  {tarea.label}
                    <button onClick={()=>deleteTaks(tarea.id)}>eliminar</button>
                </p>
                 )}
            <button onClick={addTask}>agregar tarea</button>
            <button onClick={()=>deleteTaks(8)}>Eliminar tarea 8</button>
        </>
    )
}

export default Todo