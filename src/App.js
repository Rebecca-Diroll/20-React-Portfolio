import React from "react";
import './App.css';
import NavTabs from "./components/NavTabs/NavTabs.js";
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Work from "./pages/Work/Work.js";

function App() {
  return (
    <>
      <Router>
        <h1 className="mainTitle">Rebecca D. Diroll</h1>

        <div className="headerText">32019 Beech St., Hanoverton, OH 44423</div>
        <div className="headerText">Email: rebecca.diroll@gmail.com</div>
        <div className="headerText">Cell: 330-341-0602</div>
        <br />

        <NavTabs></NavTabs>
        <br />
        <hr />

        <Route exact path="/2-React-Portfolio" component={Home} />
        <Route exact path="/2-React-Portfolio/work" component={Work} />

        <Footer></Footer>
        <br />
        <br />
      </Router>

    </>
  );
}

export default App;