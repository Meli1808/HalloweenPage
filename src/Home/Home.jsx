import React from 'react';
import './Home.css';

export function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <div className='banner text-white fw-bold'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque? Voluptas mollitia iste odit sint. Iusto, voluptas in! Possimus nihil dignissimos, impedit enim magni quae? Earum ipsum maiores cumque nulla!
        </p>
        <button className='btn btn-outline-dark'>Conócenos</button>
      </div>
      <div>
        <div className="container-fluid fondo text-white">
          <div className="row p-5">
            <div className="col-8 align-self-center text-center">
              <h5>¿ES DULCE O ES HORROR?</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero possimus culpa, quibusdam pariatur cumque, consectetur molestias, provident expedita fugiat odit accusamus quo! Repellendus nobis repudiandae, magnam rerum quis atque.
              </p>
              <img src={require('../../src/assets/img/jackhallo.png')} alt="foto" className='img-fluid w-25' />
            </div>
            <div className="row">
              
            </div>
          </div>
        </div>
      </div>
      <div className='banner2'></div>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-12">
            <img src={require('../assets/img/Hallo3.webp')} alt="" className='img-fluid w-100' />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 my-5">
          <div className="col">
            <div className="card h-100 p-3 shadow">
              <img src={require('../assets/img/bruja.jpg')} alt="" className='img-fluid w-100' />
              <h3>SERVICIO 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat soluta quis, rem neque quisquam a dolore unde error eligendi, non maxime eos nisi repudiandae cum eveniet, tempora maiores harum praesentium.
              </p>
              <hr />
              <h5 className='fw-bold text-success'>$500.000</h5>
              <button className='btn btn-primary'>
                Ampliar
                <i className='bi bi-shop-window'></i>
              </button>
            </div>
          </div>
          <div className="col">
           
          </div>
          <div className="col">
           
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid bg-dark text-white">
          <div className="row p-5">
              <div className="col-6 text-end border-end">
                <h5>Medellin,Colombia</h5>
                <h5>Todos los derechos reservados &copy;</h5>
              </div>
              <div className="col-6 align-self-center"></div>
              <i class="bi bi-instagram p-2 fs-4"></i>
              <i class="bi bi-instagram p-2 fs-4"></i>
              <i class="bi bi-instagram p-2 fs-4"></i>                  
          </div>
        </div>
      </footer>
    </>
  );
}
