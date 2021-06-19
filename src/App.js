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
        <h1>Rebecca D. Diroll</h1>

        <div className="header">32019 Beech St., Hanoverton, OH 44423</div>
        <div className="header">Email: rebecca.diroll@gmail.com</div>
        <div className="header">Cell: 330-341-0602</div>
        {/* <div className="header">LinkedIn: https://www.linkedin.com/in/rebecca-diroll-134a44102</div>
        <div className="header">GitHub: https://github.com/Rebecca-Diroll</div> */}
        <br />

        <NavTabs></NavTabs>
        <br />
        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <hr />
        <br />

        <Footer></Footer>
        <br />
        <br />
      </Router>

    </>
  );
}

export default App;