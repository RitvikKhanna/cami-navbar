import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/pages/chat";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </Router>
  );
}
