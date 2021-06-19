import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
    return (
      <div className="nav">
        <navbar>
          <Link className="button" to="/"><button>About Me</button></Link>
          <Link to="/work"><button>Work</button></Link>
        </navbar>
      </div>
    )
}

export default NavTabs;