import React, { useState } from "react";

const Inputkey = ()=>{


    const [newTask,setNewTaks] = useState("tiryon")

    function oprimioTecla(e){
        console.log("oprimioTecla")
        console.log(e.key)
        console.log(e.keyCode)
        if(e.keyCode == 13){
            console.log("OPRIMISTE ENTER")
            console.log(`se va a agregar la tarea ${newTask}`  )
            setNewTaks("")
        }

    }

    return(
        <>
            <h1> Inputkey</h1>
            <h2>Nombre</h2>
            <input type="text" onKeyDown={oprimioTecla} value={newTask} onChange={ e => setNewTaks(e.target.value)}  />
            <p>Tu nombre es {newTask}</p>
        </>
    )
}


export default Inputkey