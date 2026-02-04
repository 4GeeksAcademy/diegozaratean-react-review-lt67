import React from "react";

const Test = ()=>{

    function getTasks(){
        console.log("getTasks")
        fetch('https://playground.4geeks.com/todo/users/zoro')
        .then((response)=> response.json() )
        .then( (data)=> console.log(data.todos))
    }
    
    function addTask(){
        console.log("addTask")

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "proteger a nami",
                "is_done": false
                })
        };

        fetch('https://playground.4geeks.com/todo/todos/zoro',requestOptions)
        .then((response)=> response.json() )
        .then( (data)=> console.log(data))

    }

    function deleteTasks(){
        console.log("deleteTasks")

        const requestOptions = {
            method: 'DELETE'            
        };
        fetch('https://playground.4geeks.com/todo/todos/9',requestOptions)
        // .then((response)=> response.json() )
        .then( (data)=> {
            console.log(data)
            // voy a eliminar el usuario
            // voy a crear el usuario
        })
    }
    return(
        <>
            <h1>Test componente</h1>
            <button onClick={addTask}> Agregar tarea</button>

            <button onClick={getTasks}> Leer tareas</button>

            <button onClick={deleteTasks}> eliminar tarea</button>
        </>
    )
}

export default Test