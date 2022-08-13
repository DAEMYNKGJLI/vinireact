import React from "react";
import {BrowserRouter , Route, Switch} from "react-router-dom";

import Login from "../page/components/auth/login";
import Listadousu from '../page/components/usuarios/listadousu';
import Borrarusu from '../page/components/usuarios/borrarusu';
import Editarusu from '../page/components/usuarios/editarusu';
import Registrarusu from '../page/components/usuarios/registrarusu';
import Detalleusu from '../page/components/usuarios/detalleusu';
import Detallecomp from '../page/components/compras/detallecomp';
import Listadocomp from '../page/components/compras/listadocomp';
import Listadoprod from "../page/components/productos/listadoprod";
import Borrarprod from "../page/components/productos/borrarprod";
import Editarprod from "../page/components/productos/editarprod";
import Registrarprod from "../page/components/productos/registrarprod";
import Detalleprod from "../page/components/productos/detalleprod";
import Inicio from '../page/components/inicio';
import Error from '../page/error';


export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                
                <Route exact path='/' component={Inicio}></Route>
                <Route exact path='/login' component={Login}></Route>

                <Route exact path='/listadousu' component={Listadousu}></Route>
                <Route exact path='/detalleusu' component={Detalleusu}></Route>  
                <Route exact path='/registrarusu' component={Registrarusu}></Route>
                <Route exact path='/editarusu' component={Editarusu}></Route>
                <Route exact path='/borrarusu' component={Borrarusu}></Route>

                
                <Route exact path='/listadoprod' component={Listadoprod}></Route>
                <Route exact path='/detalleprod' component={Detalleprod}></Route>  
                <Route exact path='/registrarprod' component={Registrarprod}></Route>
                <Route exact path='/editarprod' component={Editarprod}></Route>
                <Route exact path='/borrarprod' component={Borrarprod}></Route>


                
                <Route exact path='/listadocomp' component={Listadocomp}></Route>
                <Route exact path='/detallecomp' component={Detallecomp}></Route>

                
                
                <Route component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}