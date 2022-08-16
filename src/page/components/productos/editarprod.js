import React from "react";
import { Link } from "react-router-dom";


export default class Edicion extends React.Component{
        
        state={
             producto:[]
            ,editar:''
        }
        componentDidMount(){
             //------------------Producto--------------------//
             fetch('http://localhost/Mcity-2.0/public/api/getdetp/'+this.props.location.state.id)
             .then(response => response.json())
             .then(productoJson => this.setState({producto: productoJson}))
        }
        changeField =(event)=>{
            this.setState({
                producto:{
                    ...this.state.producto,
                    [event.target.name]:event.target.value
                }
                
            })
        }
        subForm=(event)=>{
            event.preventDefault();
            let data ={
                producto:this.state.producto.producto
                ,codigo:this.state.producto.codigo
                ,tipo:this.state.producto.tipo
                ,precio:this.state.producto.precio
                ,fotop:this.state.producto.fotop
                ,cantidad:this.state.producto.cantidad
            };
            fetch('http://localhost/Mcity-2.0/public/api/putprod/'+this.state.producto.id,
            {
            method:'PUT',
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
        const {producto,editar}=this.state

        return(
            <div className="container" style={{maxWidth:"750px"}}>
                <br/>
                <h1>Editar Producto</h1>
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
                        <label>Producto:</label>
                        <input type="text" className="form-control" name="producto" defaultValue={producto.producto}  onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Código:</label>
                        <input type="text" className="form-control" name="codigo" defaultValue={producto.codigo} onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Tipo:</label>
                        <input type="text" className="form-control" name="tipo" defaultValue={producto.tipo} onChange={this.changeField}/>
                    </div>
                    <div className="form-group">
                        <label>Precio:</label>
                        <input type="text" className="form-control" name="precio" defaultValue={producto.precio}onChange={this.changeField}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Foto(url)</label>
                        <input type="text" className="form-control" name="fotop" defaultValue={producto.fotop}onChange={this.changeField}/>
                    </div>

                    <div className="form-group">
                        <label>Cantidad:</label>
                        <input type="text" className="form-control" name="cantidad" defaultValue={producto.cantidad} onChange={this.changeField}/>
                    </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Editar</button>
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