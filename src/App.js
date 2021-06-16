import React from "react";
import './App.css';
import NavTabs from "./components/NavTabs/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <>
      <Router>
        <banner>Rebecca D. Diroll</banner>
        <NavTabs></NavTabs>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        // <Route exact path="/resume" component={Resume} /> */}
        <footer></footer>
      </Router>

    </>
  );
}

export default App;