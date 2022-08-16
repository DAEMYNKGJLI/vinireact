import React from "react";
import { Link } from "react-router-dom";

export default class Detalle extends React.Component{
    state={
        producto:[],
    }

    componentDidMount(){
        fetch('http://localhost/Mcity-2.0/public/api/getdetp/'+this.props.location.state.id)
        .then(response => response.json())
        .then(productoJson => this.setState({producto: productoJson}))
    }
    render(){
        const {producto}=this.state
        return(
            <center>
                <br/>
                <h1>Detalle de Producto</h1>
                <br/>
                <div className="card mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={producto.fotop} className="card-img"alt={producto.producto}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{producto.producto}</h5>
                            <p className="card-text">
                                <b>Producto:</b>{producto.producto}<br/>
                                <b>Cantidad:</b>{producto.cantidad}<br/>
                                <b>Precio:</b>{producto.precio}<br/>
                            </p>
                            <p className="card-text"> 
                                <small className="text-mute">
                                    Ultima actualización Hace: <br/> {producto.created_at}
                                </small>
                            </p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <Link to="/listadoprod">
                <button type='button' className='btn btn-secondary'>
                    regresar                             
                </button>
                </Link>
            </center>
        )
    }
}