import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <i class="bi bi-justify"></i> Safety Analytics
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>

          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
             
             
            </ul>
            <Link to="/" class="btn btn">
            <span to="/" class=" btn-outline-success">
              <i class="bi bi-bell"></i>
            </span>
            </Link>
            <Link to="/" class="btn btn">
            <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
