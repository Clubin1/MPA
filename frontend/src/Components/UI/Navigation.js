import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import '../../Components/Styles/Styles.css';

const Navigation = () => {
	return (
		<div>
			<nav id="navBar" className="navbar navbar-expand-md navbar-dark">
			   <Container> 
			    <Link to="/" className="navbar-brand">MPA</Link>
			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
			        <span className="navbar-toggler-icon"></span>
			    </button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
			    <ul className="navbar-nav ml-auto">
			        <li className="nav-item">
			            <Link to="/" className="nav-link">HOME</Link>
			        </li>
			        <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          ABOUT
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
			          <a class="dropdown-item" href="/about">About</a>
			          <a class="dropdown-item" href="/faq">FAQ</a>
			          <a class="dropdown-item" href="/resources">Resources</a>
			        </div>
			      </li>
			        <li className="nav-item">
			            <Link to="/membership" className="nav-link">PROFESSIONALS</Link>
			        </li>
 					<li className="nav-item">
			            <Link to="/contact" className="nav-link">CONTACT</Link>
			        </li>

			    </ul>
			</div>
			</Container>
			</nav>
		</div>
	)
}

export default Navigation