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
        <banner>Rebecca D. Diroll</banner>
        <br></br>
        <NavTabs></NavTabs>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        {/* <Route exact path="/contact" component={Contact} />
        // <Route exact path="/resume" component={Resume} /> */}
        <Footer></Footer>
      </Router>

    </>
  );
}

export default App;