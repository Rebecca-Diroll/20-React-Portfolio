import React from "react";
import { Link } from "react-router-dom";
// import './NavTabs.css';

function NavTabs() {
    return (
        <navbar>
          <Link to="/"><button>About Me</button></Link>
          <Link to="/work"><button>Work</button></Link>
        </navbar>
    )
}

export default NavTabs;