import React from "react";
import { Link } from "react-router-dom";
// import './NavTabs.css';

function NavTabs() {
    return (
        <navbar>
          <Link to="/">About Me</Link>

            <Link to="/work"><button>Work</button></Link>
            <button>Resume</button>
        </navbar>
    )
}

export default NavTabs;