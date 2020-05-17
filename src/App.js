import React from "react";
import "./App.css";
import FormPage from "./pages/FormPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CarouselPage from "./pages/CarouselPage";
import Navbar from "./components/Navbar";
import PGPage from "./pages/PGPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/list" component={FormPage} />
          <Route exact path="/view" component={CarouselPage} />
          <Route path="/view/:id" component={PGPage}/>
          <Route path="/" component={FormPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
