import React from "react";
import { Link } from "react-router-dom";

export default class Listado extends React.Component {
  state = {
    usuarios: [],
  };
  componentDidMount() {
    fetch("http://localhost/mcityreact/public/api/getusu")
      .then((response) => response.json())
      .then((usuariosJson) => this.setState({ usuarios: usuariosJson }));
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div className="container">
        <br />
        <h2>usuarios({usuarios.length})</h2>
        <br />
        <p style={{ textAlign: "right" }}>
          {"  "}
          <Link to="/registrarusu">
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
            <th scope="col">Nombre</th>
            <th scope="col">Empresa</th>
            <th scope="col">Detalles</th>
            <th scope="col">Tipo de usuario</th>
            <th scope="col">Foto</th>
            <th scope="col">Correo</th>
          </thead>
          <tbody>
            {usuarios.map((usuario, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.empresa}</td>
                <td>{usuario.detalles}</td>
                <td>{usuario.tipou}</td>
                <td>{usuario.fotou}</td>
                <td>{usuario.correo}</td>
                <td>
                  <Link
                    to={{ pathname: "/detalleusu", state: { id: usuario.id } }}
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
                    to={{ pathname: "/editarusu", state: { id: usuario.id } }}
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
                    to={{ pathname: "/borrarusu", state: { id: usuario.id } }}
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
