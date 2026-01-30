import React, { useState } from "react";

const Inputsub = ()=>{


    const [newTask,setNewTaks] = useState("")

    function sendData(e){
        e.preventDefault()
        console.log("sendData")
        console.log("SE va a agregar la tarea :" + newTask)
        setNewTaks("")
    }

    return(
        <>
            <h1> Inputsub</h1>
            <h2>Nombre</h2>
            <form onSubmit={sendData} >
                <input type="text" name="nombre" value={newTask} onChange={ e => setNewTaks(e.target.value)}  />
            </form>
            <p>Tu nombre es {newTask}</p>
        </>
    )
}


export default Inputsub