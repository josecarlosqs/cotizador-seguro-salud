import React from 'react';

import {
  BrowserRouter as Router
} from "react-router-dom";

import Layout from './components/layout'

function App() {
  let routerProps: any = {};

//  if(process.env.ROUTER_BASENAME){
//    routerProps['basename'] = process.env.ROUTER_BASENAME;
//  }

  return (
    <Router {...routerProps}>
      <Layout />
    </Router>
  );
}

export default App;
