import React from "react";
import { Link } from "react-router-dom";

export default class Listado extends React.Component {
  state = {
    productos: [],
  };
  componentDidMount() {
    fetch("http://localhost/mcityreact/public/api/getprod")
      .then((response) => response.json())
      .then((productosJson) => this.setState({ productos: productosJson }));
  }

  render() {
    const { productos } = this.state;
    return (
      <div className="container">
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
                    <Link to="/listadoprod">
                      <button type="button" className="btn nav-item nav-link">
                        Productos
                      </button>
                    </Link>
                    <Link to="/listadocomp">
                      <button type="button" className="btn nav-item nav-link">
                        Compras
                      </button>
                    </Link>
                    <Link to="/logout">
                      <button type="button" className="btn nav-item nav-link">
                        Cerrar sesión
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
        <center>
          <br />
          <h2>INICIO</h2>
          <br />
          <table className="table table-hover table-primary">
            <thead>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Producto</th>
              <th scope="col">Tipo</th>
              <th scope="col">precio</th>
              <th scope="col">Foto</th>
            </thead>
            <tbody>
              {productos.map((producto, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{producto.id}</td>
                  <td>{producto.producto}</td>
                  <td>{producto.tipo}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.foto}</td>
                  <td>
                    <Link to={{ pathname: "/comprar" }}>
                      <button type="button" className="btn btn-primary btn-sm">comprar</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
        <footer>
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-6 copyright">
                  <p>
                    Copyright &copy; <a href="test.mcitystore.com"></a>. All
                    Rights Reserved
                  </p>
                </div>

                <div class="col-md-6 template-by">
                  <p>
                    McityStore <a href="test.mcitystore.com">mcity</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
