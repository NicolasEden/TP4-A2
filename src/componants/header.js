import React from 'react';

var formeoStyle = {
    "formeotitle" : {
        "paddingTop": "15px",
        "paddingLeft": "10px",
        "fontSize": "22px"
    },
    "formeoNav": {
        "display": "flex"
    },
    "formeoNavbar": {
        "paddingLeft": "200px"
    }
}

class Header extends React.Component {
    render() {
        return (
            <div class="container-fluid navbar-dark bg-dark" style={formeoStyle.formeoNavbar}>
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="#" style={formeoStyle.formeoNav}>
                            <img src="https://formation-pro.eu/public/formeo.png" width="60" height="60" class="d-inline-block align-top" alt="Logo Formeo"/>
                            <p style={formeoStyle.formeotitle}>Formeo</p>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Cours</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Nos Prix</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Nous contacter</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
