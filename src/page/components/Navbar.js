<header>
          <div class="nav">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div class="navbar-nav mr-auto">
                    <Link to="/">
                      <button type="button" className="btn nav-item nav-link">
                        Inicio
                      </button>
                    </Link>
                    <Link to="/listadoprod">
                      <button type="button" className="btn nav-item nav-link">
                        Productos
                      </button>
                    </Link>
                    <Link to="/listadousu">
                      <button type="button" className="btn nav-item nav-link">
                        Usuarios
                      </button>
                    </Link>
                    <Link to="/listadocomp">
                      <button type="button" className="btn nav-item nav-link">
                        Compras
                      </button>
                    </Link>
                    <Link to="/login">
                      <button type="button" className="btn nav-item nav-link">
                        Iniciar sesión
                      </button>
                    </Link>
                    <Link to="/logout">
                      <button type="button" className="btn nav-item nav-link">
                       cerrar sesión
                      </button>
                    </Link>
                    <div class="navbar-nav ml-auto">
                      <div class="nav-item dropdown"></div>
                    </div>
                  </div>
                  <div class="navbar-nav ml-auto">
                    <div class="nav-item dropdown"></div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>