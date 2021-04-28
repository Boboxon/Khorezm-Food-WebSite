import "./App.css";
import React from "react";
import Navbar from "./components/NavbarMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
// import News from "./components/News";
import Contact from "./components/Contact";
import SendMenu from "./components/SendMenu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { FoodProvider } from "./components/Data";

function App() {
  return (
    <Router>
      <div>
        <FoodProvider>
          {/* <Home /> */}
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <SendMenu />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/news">
            <News />
          </Route> */}
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </FoodProvider>
      </div>
    </Router>
  );
}

export default App;
