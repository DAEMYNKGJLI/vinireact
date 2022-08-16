import React from 'react';
import { Link } from 'react-router-dom';



export default class Delete extends React.Component{
    state = {
        usuario:[]
    }
    componentDidMount(){
        //---------Consulta-------------------//
        fetch('http://localhost/Mcity-2.0/public/api/getdetu/'+this.props.location.state.id)
        .then(response => response.json())
        .then(usuarioJson => this.setState({usuario: usuarioJson}));
//------------ELIMINACIÓN-----------------------//
        fetch('http://localhost/Mcity-2.0/public/api/delusu/'+this.props.location.state.id,{method:'delete'});
    }

    render(){
        const {usuario}=this.state

        var today=new Date();
        var date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time=today.getHours()+':'+ today.getMinutes()+':'+today.getSeconds();
       
        return(
        <center>
          <br/>
                <h1>Detalle de Usuario</h1>
                <br/>
                <div className="card mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={usuario.fotou} className="card-img"alt={usuario.nombre}></img>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{usuario.nombre}</h5>
                            <p className="card-text">
                                <b>Empresa:</b>{usuario.empresa}<br/>
                                <b>Detalles:</b>{usuario.detalles}<br/>
                                <b>Tipo usuario:</b>{usuario.tipou}<br/>
                            </p>
                            <p className="card-text"> 
                                <small className="text-mute">
                                    Ultima actualización Hace: <br/> {usuario.created_at}
                                </small>
                            </p>
                        </div>
                    </div>
                    </div>
                
            </div>
            <div className='alert alert-success' role="alert" style={{maxWidth:"750px"}}>
                <h4 className='alert-heading'>Bien!!</h4>
                <p>El usuario se ha eliminado!!</p>
                <hr/>
                <p className='mb-0'>{date+'||'+ time}</p>
            </div>
            <br/>
            <br/>
            <Link to="/listadousu">
            <button type='button' className='btn btn-secondary'>
                regresar                             
            </button>
            </Link>
            
        </center>
        )
    }
}