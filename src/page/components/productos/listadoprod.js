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
        <br />
        <h2>Productos({productos.length})</h2>
        <br />
        <p style={{ textAlign: "right" }}>
          {"  "}
          <Link to="/registrarprod">
            <button type="button" className="btn btn-success btn-sm">
              Registrar
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="btn btn-warning btn-sm">
              Regresar
            </button>
          </Link>
        </p>
        <table className="table table-hover table-primary">
          <thead>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">producto</th>
            <th scope="col">Código</th>
            <th scope="col">Tipo</th>
            <th scope="col">Precio</th>
            <th scope="col">Foto</th>
            <th scope="col">Cantidad</th>
          </thead>
          <tbody>
            {productos.map((producto, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{producto.id}</td>
                <td>{producto.producto}</td>
                <td>{producto.codigo}</td>
                <td>{producto.tipo}</td>
                <td>{producto.precio}</td>
                <td>{producto.fotop}</td>
                <td>{producto.cantidad}</td>
                <td>
                  <Link
                    to={{ pathname: "/detalleprod", state: { id: producto.id } }}
                  >
                    <button
                      type="button"
                      className="btn btn-info btn-sm"
                    >
                      Detalle
                    </button>
                  </Link>
                  {"  "}
                  <Link
                    to={{ pathname: "/editarprod", state: { id: producto.id } }}
                  >
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                    >
                      Editar
                    </button>
                  </Link>
                  {"  "}
                  <Link
                    to={{ pathname: "/borrarprod", state: { id: producto.id } }}
                  >
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                    >
                      Borrar
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
