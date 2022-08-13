import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const[correo,setCorreo]=useState("");
  const[password,setPassword]=useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/listadousu");
    }
  }, []);
  async function login() {
    console.warn(correo,password)
    let item={correo,password}
    let result= await fetch("http://localhost/mcityreact/public/api/login",{
        method:"POST",
        Headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("listadousu")

  }
  return (
    <div>
      <header>
        <div class="nav">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div class="navbar-nav mr-auto">
                  <Link to="/">
                    <button type="button" className="btn nav-item nav-link">
                      Inicio
                    </button>
                  </Link>
                  <Link to="/login">
                    <button type="button" className="btn nav-item nav-link">
                      Iniciar sesión
                    </button>
                  </Link>
                  <div class="navbar-nav ml-auto">
                    <div class="nav-item dropdown"></div>
                  </div>
                </div>
                <div class="navbar-nav ml-auto">
                  <div class="nav-item dropdown"></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <h1>Pagina de inicio de sesión</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Correo"
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
        <button onClick={login} className="btn btn-primary">Iniciar Sesión</button>
      </div>
    </div>
  );
}
