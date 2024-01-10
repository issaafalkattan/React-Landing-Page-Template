import React from "react";
import "./App.css";
import Router from './components/router';
import { Navigation } from "./components/navigation";

const App = () => {

  return (
    <div>
      <Router />
      <Navigation />
    </div>
  );
};

export default App;
