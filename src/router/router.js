import React from "react";
import {BrowserRouter , Route, Switch} from "react-router-dom";

import Login from "../page/components/login";
import Listadousu from '../page/components/listadousu';
import Borrarusu from '../page/components/borrarusu';
import Editarusu from '../page/components/editarusu';
import Registrarusu from '../page/components/registrarusu';
import Detalleusu from '../page/components/detalleusu';
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