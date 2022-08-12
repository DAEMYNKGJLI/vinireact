import React from 'react';
import { Link } from 'react-router-dom';

export default class Listado extends React.Component{
    state = {
        usuarios:[]
    }
    componentDidMount(){
        fetch('http://localhost/mcityreact7/public/api/getusu')
        .then(response => response.json())
        .then(usuariosJson => this.setState({usuarios: usuariosJson}))
    }

    render(){
        const{usuarios}=this.state
        return(
            <div className='container'>
                <br/>
                <h2>usuarios({usuarios.length})</h2>
                <br/>
                <p style={{textAlign:'right'}}>
                {'  '}
                <Link to='/registrarusu'>
                <button type='button' className='btn btn-outline-success btn-sm'>
                    Registrar                               
                </button>
                </Link>
                </p>
                <table className='table table-hover table-dark'>
                    <thead>
                        <th scope='col'>#</th>
                        <th scope='col'>id</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Empresa</th>
                        <th scope='col'>Detalles</th>
                        <th scope='col'>Tipo de usuario</th>
                        <th scope='col'>Foto</th>
                        <th scope='col'>Correo</th>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario,i)=>
                        
                        
                        <tr key={i}>
                            <th scope='row'>{i+1}</th>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.empresa}</td>
                            <td>{usuario.detalles}</td>
                            <td>{usuario.tipou}</td>
                            <td>{usuario.fotou}</td>
                            <td>{usuario.correo}</td>
                            <td>
                                <Link to={{ pathname:'/detalleusu',state:{id:usuario.id} }}>
                                <button type='button' className='btn btn-outline-info btn-sm'>
                                    Detalle                                
                                </button>
                                </Link>
                                {'  '}
                                <Link to={{ pathname:'/editarusu',state:{id:usuario.id} }}>
                                <button type='button' className='btn btn-outline-warning btn-sm'>
                                    Editar                              
                                </button>
                                </Link>
                                {'  '}
                                <Link to={{ pathname:'/borrarusu',state:{id:usuario.id} }}>
                                <button type='button' className='btn btn-outline-danger btn-sm'>
                                    Borrar                               
                                </button>
                                </Link>
                                
                            </td>
                        </tr>
                        )}
                    </tbody>
                    
                </table>
                
            </div>
        )
    }
}