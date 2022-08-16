import React from "react";
import { Link } from "react-router-dom";



export default class Edicion extends React.Component{
        
        state={
             usuario:[]
            ,editar:''
        }
        componentDidMount(){
             //------------------Usuario---------------------//
             fetch('http://localhost/Mcity-2.0/public/api/getdetu/'+this.props.location.state.id)
             .then(response => response.json())
             .then(usuarioJson => this.setState({usuario: usuarioJson}))
        }
        changeField =(event)=>{
            this.setState({
                usuario:{
                    ...this.state.usuario,
                    [event.target.name]:event.target.value
                }
                
            })
        }
        subForm=(event)=>{
            event.preventDefault();
            let data ={
                nombre:this.state.usuario.nombre
                ,empresa:this.state.usuario.empresa
                ,detalles:this.state.usuario.detalles
                ,tipou:this.state.usuario.tipou
                ,fotou:this.state.usuario.fotou
                ,correo:this.state.usuario.correo
                ,password:this.state.usuario.password
            };
            fetch('http://localhost/Mcity-2.0/public/api/putusu/'+this.state.usuario.id,
            {method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            mode:"cors",
            body:JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data=>this.setState({editar:"registro modificado de forma exitosa"}))
        }
    render(){
        const {usuario,editar}=this.state

        return(
            <div className="container" style={{maxWidth:"750px"}}>
               
                <br/>
                <h1>Editar usuario</h1>
                <br/>
                {editar?
                    <div className="alert alert-success" role="alert">
                       {editar} 
                    </div>
                    :
                    <div>
                        
                    </div>
                }
                <form onSubmit={this.subForm}>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" className="form-control" name="nombre" defaultValue={usuario.nombre}  onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Empresa:</label>
                        <input type="text" className="form-control" name="empresa" defaultValue={usuario.empresa} onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Detalles:</label>
                        <input type="text" className="form-control" name="detalles" defaultValue={usuario.detalles} onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Tipo de Usuario:</label>
                        <input type="text" className="form-control" name="tipou" defaultValue={usuario.tipou}onChange={this.changeField}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Foto(url)</label>
                        <input type="text" className="form-control" name="fotou" defaultValue={usuario.fotou}onChange={this.changeField}/>
                    </div>

                    <div className="form-group">
                        <label>Correo:</label>
                        <input type="email" className="form-control" name="correo" defaultValue={usuario.correo} onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input type="password" className="form-control" name="password" defaultValue={usuario.password}onChange={this.changeField}/>
                    </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Editar</button>
                </form>
                <Link to='/listadousu'>
                <button type='button' className='btn btn-success btn-sm'>
                   Regresar
                </button>
                </Link>
                <br/>
            </div>
        )
    }
}