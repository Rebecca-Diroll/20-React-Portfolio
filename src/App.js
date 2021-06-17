import React from "react";
import './App.css';
import NavTabs from "./components/NavTabs/NavTabs.js";
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Work from "./pages/Work/Work.js";
import Contact from "./pages/Contact/Contact.js";

function App() {
  return (
    <>
      <Router>
        <h1>Rebecca D. Diroll</h1>
        <br></br>
        <NavTabs></NavTabs>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Footer></Footer>
      </Router>

    </>
  );
}

export default App;