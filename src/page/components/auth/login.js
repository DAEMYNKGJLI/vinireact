import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";

export default function Loginusu() {
  const[correo,setCorreo]=useState("");
  const[password,setPassword]=useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/listadousu");
    }
  },[])
  async function Login() {
    console.warn(correo,password)
    let item={correo,password}
    let result= await fetch("http://localhost/Mcity-2.0/public/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem('user-info',JSON.stringify(result))
    history.push("/listadousu")

  }
  return (
    <div>
      
      <Navbar/>
      <h1>Pagina de inicio de sesión</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="email"
          placeholder="correo"
          name="correo"
          className="form-control"
          onChange={(e)=>setCorreo(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="form-control"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <button onClick={Login} className="btn btn-primary">Iniciar Sesión</button>
      </div>
    </div>
  );
}
