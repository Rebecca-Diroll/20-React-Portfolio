import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
    return (
      <div className="nav">
        <navbar>
          <Link className="button" to="/"><button className="headerButton">About Me</button></Link>
          <Link to="/work"><button className="headerButton">Work</button></Link>
        </navbar>
      </div>
    )
}

export default NavTabs;