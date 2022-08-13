import React from "react";
import { Link } from "react-router-dom";


export default class Registrar extends React.Component{
        
        state={
            producto:''
            ,codigo:''
            ,tipo:''
            ,precio:''
            ,fotop:''
            ,cantidad:''
        }
        
        changeField =(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        subForm=(event)=>{
            event.preventDefault();
            let data ={
                producto:this.state.producto
                ,codigo:this.state.codigo
                ,tipo:this.state.tipo
                ,precio:this.state.precio
                ,fotop:this.state.fotop
                ,cantidad:this.state.cantidad
            };
            fetch('http://localhost/mcityreact/public/api/postprod',
            {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data=>this.setState({alta:"registro exitoso"}))
        }
    render(){
        const {alta}=this.state

        return(
            <div className="container" style={{maxWidth:"750px"}}>
                <br/>
                <h1>Registrar Producto</h1>
                <br/>
                {alta?
                    <div className="alert alert-success" role="alert">
                       {alta} 
                    </div>
                    :
                    <div>
                        
                    </div>
                }
                <form onSubmit={this.subForm}>
                    <div className="form-group">
                        <label>Producto:</label>
                        <input type="text" className="form-control" name="producto" onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Código:</label>
                        <input type="text" className="form-control" name="codigo"  onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Tipo:</label>
                        <input type="text" className="form-control" name="tipo" onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Precio:</label>
                        <input type="text" className="form-control" name="precio" onChange={this.changeField}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Foto(url)</label>
                        <input type="file" className="form-control" name="fotop"  onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Cantidad</label>
                        <input type="text" className="form-control" name="cantidad"  onChange={this.changeField}/>
                    </div>
                        <br/>
                        <button type="submit" className="btn bt-success">Registrar</button>
                </form>
                <Link to='/listadoprod'>
                <button type='button' className='btn btn-success btn-sm'>
                   Regresar
                </button>
                </Link>
                <br/>
            </div>
        )
    }
}