import React , { useState} from "react";

const Tasks = ()=>{

    const [tareas, setTareas] = useState(["lavar ropa","limpiar el patio","paser perro"])
    

    // let tareas = ["lavar ropa","limpiar el patio","paser perro"]
    let tarea = "lavar los platos"

    function addTask(){
        console.log("addTask")
        // console.log(tareas)
        // tareas.push(tarea)
        // console.log(tareas)
        // tareas = []
        /// ...tareas=====> "lavar ropa","limpiar el patio","paser perro"
        setTareas([...tareas,tarea])
    }

    function eliminarTarea(indice){
        console.log("eliminarTarea "+indice)
    }
    return(
        <>
            <h1>Componente Tasks</h1>
            <p>{tarea}</p>
            <p>{tareas}</p>
            <ol>                
                {tareas.map( (tarea,index)=>  <li key={index}>{tarea} <button onClick={()=>eliminarTarea(index)}>x</button> </li> )}
            </ol>
            <button onClick={addTask} >Agregar elemento</button>
            <p> El total de tareas es {tareas.length} </p>
        </>
    )
}

export default Tasks