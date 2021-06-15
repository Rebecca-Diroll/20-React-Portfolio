// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={work} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/resume" component={resume} />
    </Router>
    <Footer />
  );
}

export default App;
