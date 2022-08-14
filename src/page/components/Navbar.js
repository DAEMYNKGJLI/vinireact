import { Link, useHistory } from "react-router-dom"
import {Navbar,Nav, NavDropdown} from "react-bootstrap";
import "./nav.css";

export default function Header() {
    let user=JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory();
    function logout()
    {
        localStorage.clear();
        history.push('login')
    }
    return(
        <div>
            <Navbar bg="navbar navbar-dark bg-primary"> 
            <ul>
            <li><img src="https://test.mcitystore.com/public/img/mcitylogo.jpeg" width="70" height="50" alt="test"/><Navbar.Brand href="/">Inicio</Navbar.Brand></li>
            </ul>
                
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info')?

                        <>
                        <ul>
                        <li><Link class="link-dark" to="/listadousu">Usuarios</Link></li>
                        <li><Link class="link-dark" to="/listadoprod">Productos</Link></li>
                        <li><Link class="link-dark" to="/listadocomp">Compras</Link></li>

                        </ul>
                       
                        
                        
                        </>
                        :
                        <>
                        <ul>
                        <li><Link class="link-dark" to="/login">Inicia sesión</Link></li>
                        <li><Link class="link-dark" to="/register">Registrate</Link></li>
                        </ul>
                        
                        </>
                    }
                </Nav>
                <Nav>
                    <NavDropdown title={user && user.nombre}>
                    <NavDropdown.Item class="link-dark" onClick={logout}>Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )

    }