import React from "react";
import { Link } from "react-router-dom";

export default class Detalle extends React.Component{
    state={
        compra:[],
    }

    componentDidMount(){
        fetch('http://localhost/Mcity-2.0/public/api/getdetc/'+this.props.location.state.id)
        .then(response => response.json())
        .then(compraJson => this.setState({compra: compraJson}))
    }
    render(){
        const {compra}=this.state
        return(
            <center>
                <br/>
                <h1>Detalle de Compra</h1>
                <br/>
                <div className="card mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={compra.fotop} className="card-img"alt={compra.producto}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{compra.producto}</h5>
                            <p className="card-text">
                                <b>Producto:</b>{compra.producto}<br/>
                                <b>Precio:</b>{compra.precio}<br/>
                                <b>Total:</b>{compra.total}<br/>
                            </p>
                            <p className="card-text"> 
                                <small className="text-mute">
                                    Ultima actualización Hace: <br/> {compra.created_at}
                                </small>
                            </p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <Link to="/listadocomp">
                <button type='button' className='btn btn-secondary'>
                    regresar                             
                </button>
                </Link>
            </center>
        )
    }
}