import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default class Listado extends React.Component {
  state = {
    compras: [],
  };
  componentDidMount() {
    fetch("http://localhost/Mcity-2.0/public/api/getcomp")
      .then((response) => response.json())
      .then((comprasJson) => this.setState({ compras: comprasJson }));
  }

  render() {
    const { compras } = this.state;
    return (
      <div className="container">
        <Navbar/>
        <br />
        <h2>Compras({compras.length})</h2>
        <br />
        <p style={{ textAlign: "right" }}>
          {"  "}
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
            <th scope="col">Producto</th>
            <th scope="col">Foto Del Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">sub_total</th>
            <th scope="col">Total</th>
          </thead>
          <tbody>
            {compras.map((compra, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{compra.id}</td>
                <td>{compra.producto}</td>
                <td>{compra.fotop}</td>
                <td>{compra.precio}</td>
                <td>{compra.cantidad}</td>
                <td>{compra.sub_total}</td>
                <td>{compra.total}</td>
                <td>
                  <Link
                    to={{ pathname: "/detallecomp", state: { id: compra.id } }}
                  >
                    <button
                      type="button"
                      className="btn btn-info btn-sm"
                    >
                      Detalle
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
