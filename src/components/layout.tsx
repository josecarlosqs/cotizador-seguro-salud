import React from 'react';

import {
  Link,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Layout(){
  
  const location = useLocation();

  const [ layoutClassname, setLayoutClassname ] = React.useState('layout');

  React.useEffect(() => {
    switch(location.pathname){
      case '/about': setLayoutClassname('layout layout--insurance-form-page'); break;
      case '/dashboard': setLayoutClassname('layout layout--thankyou-page'); break;
      default: setLayoutClassname('layout layout--home-page'); break;
    }
  }, [ location ])

  return <div className={layoutClassname}>
    <div className="layout__sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
    <div className="layout__content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </div>
}

export default Layout;