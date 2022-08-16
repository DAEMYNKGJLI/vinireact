import React from "react";
import { Link } from "react-router-dom";



export default class Registrar extends React.Component{
        
        state={
            nombre:''
            ,empresa:''
            ,detalles:''
            ,tipou:''
            ,fotou:''
            ,correo:''
            ,password:''
        }
        
        changeField =(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        subForm=(event)=>{
            event.preventDefault();
            let data ={
                nombre:this.state.nombre
                ,empresa:this.state.empresa
                ,detalles:this.state.detalles
                ,tipou:this.state.tipou
                ,fotou:this.state.fotou
                ,correo:this.state.correo
                ,password:this.state.password
            };
            fetch('http://localhost/Mcity-2.0/public/api/register',
            {method:'POST',
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
                <center> 
                <br/>
                <h1>Registro de usuario</h1>
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
                        <label>Nombre:</label>
                        <input type="text" className="form-control" name="nombre" onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Empresa:</label>
                        <input type="text" className="form-control" name="empresa"  onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Detalles:</label>
                        <input type="text" className="form-control" name="detalles" onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Tipo de Usuario:</label>
                        <input type="text" className="form-control" name="tipou" onChange={this.changeField}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Foto(url)</label>
                        <input type="file" className="form-control" name="fotou"  onChange={this.changeField}/>
                    </div>

                    <div className="form-group">
                        <label>Correo:</label>
                        <input type="email" className="form-control" name="correo" onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input type="password" className="form-control" name="password" onChange={this.changeField}/>
                    </div>
                        <br/>
                        <button type="submit" className="btn bt-outline">Registrar</button>
                </form>
                <Link to='/listadousu'>
                <button type='button' className='btn btn-outline-success btn-sm'>
                   Regresar
                </button>
                </Link>
                <br/>
                </center>   
            </div>
        )
    }
}