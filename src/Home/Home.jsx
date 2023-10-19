import './Home.css'
export function Home(){

    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu
        menu fixed-top">
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
        <div className='banner text-white fw-bold'><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque? Voluptas mollitia iste odit sint. Iusto, voluptas in! Possimus nihil dignissimos, impedit enim magni quae? Earum ipsum maiores cumque nulla!</p>
          <button className='btn btn-outline-dark'>Conocenos</button></div>
          <div>
            <div className="container-fluid fondo text-white">
              <div className="row p-5">
                <div className="col-8 align-self-center text-center">
                 <h5>¿ES DULCE O ES HOROR?</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero possimus culpa, quibusdam pariatur cumque, consectetur molestias, provident expedita fugiat odit accusamus quo! Repellendus nobis repudiandae, magnam rerum quis atque.</p>
                 <img src="../../src/assets/img/hallo2.jpg" alt="foto" className='img-fluid'/>
                 
                  
                </div>
               
                <div className="row">

                </div>
              </div>
            </div>
            
          </div>

          <div className='banner2'></div>
        </>
    )

}