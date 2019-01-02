import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../frontend/App';
import Backend from '../backend/App';  // Could be used to implement a backend down the line
const AppRouter = () => (
    <Router>
  <div>
        <Route path="/"  exact component={App} />
        </div>
    </Router>
  );
  
  export default AppRouter;
  