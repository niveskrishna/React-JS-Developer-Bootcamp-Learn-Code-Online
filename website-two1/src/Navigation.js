import React from 'react';

const Navigation=()=>{
return(    <nav className="navbar navbar-expand-lg text-white bg-dark">
      <button className="navbar-brand text-success">Navbar</button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link text-white" >Home </button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white" >About Us</button>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link text-white">
              Products
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link disabled" >Meeting</button>
          </li>
        </ul>
        
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>

      </div>
    </nav>
);
}

export default Navigation;