import React, { useState } from "react";

const Form = ()=>{

    const [nombre,setNombre] = useState("kevin")
    const [apellido,setApellido] = useState("")
    let name = 'patricia'

    

    return(
        <>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" value={nombre} onChange={ (e)=>setNombre(e.target.value)} className="form-control" id="name" placeholder="ingresa tu nombre" />
            </div>

            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Apellidio</label>
                <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)} className="form-control" id="lastname" placeholder="ingresa tu apellido" />
            </div>
            <p> Hola mi nombe completo es {nombre} {apellido}</p>
        </>
    )
}

export default Form