import React from "react";
import {BrowserRouter , Route, Switch} from "react-router-dom";

import Login from "../page/components/auth/login";
import Listadousu from '../page/components/usuarios/listadousu';
import Borrarusu from '../page/components/usuarios/borrarusu';
import Editarusu from '../page/components/usuarios/editarusu';
import Registrarusu from '../page/components/usuarios/registrarusu';
import Detalleusu from '../page/components/usuarios/detalleusu';
import Inicio from '../page/components/inicio';
import Error from '../page/error';


export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Inicio}></Route>
                <Route exact path='/listadousu' component={Listadousu}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/registrarusu' component={Registrarusu}></Route>
                <Route exact path='/editarusu' component={Editarusu}></Route>
                <Route exact path='/borrarusu' component={Borrarusu}></Route>
                <Route exact path='/detalleusu' component={Detalleusu}></Route>
                <Route component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}