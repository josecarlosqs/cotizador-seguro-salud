import {
  Switch,
  Route
} from "react-router-dom";

import HomeScreen from './screen/home-screen'
import PersonalInfoScreen from './screen/personal-info-screen'

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


function Routes(){
  return <Switch>
    <Route exact path="/">
      <HomeScreen />
    </Route>
    <Route path="/datos-personales">
      <PersonalInfoScreen />
    </Route>
    <Route path="/elige-seguro">
      <About />
    </Route>
    <Route path="/gracias">
      <Dashboard />
    </Route>
  </Switch>
}

export default Routes;