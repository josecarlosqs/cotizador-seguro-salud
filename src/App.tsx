import React from 'react';

import {
  BrowserRouter as Router
} from "react-router-dom";

import Layout from './components/layout'

function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <Layout />
    </Router>
  );
}

export default App;
