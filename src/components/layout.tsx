import React from 'react';

import {
  Link,
  useLocation
} from "react-router-dom";

import Routes from './routes'

function Layout(){
  
  const location = useLocation();

  const [ layoutClassname, setLayoutClassname ] = React.useState('layout');

  React.useEffect(() => {
    switch(location.pathname){
      case '/': setLayoutClassname('layout layout--home-page'); break;
      case '/gracias': setLayoutClassname('layout layout--thankyou-page'); break;
      default: setLayoutClassname('layout layout--insurance-form-page'); break;
    }
  }, [ location ])

  return <div className={layoutClassname}>
    <div className="layout__sidebar">
      <ul>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/datos-personales`}>Datos personales</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/elige-seguro`}>Elige tu seguro</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/gracias`}>Gracias</Link>
        </li>
      </ul>
    </div>
    <div className="layout__content">
      <div className="container page">
        <Routes />
      </div>
    </div>
  </div>
}

export default Layout;
