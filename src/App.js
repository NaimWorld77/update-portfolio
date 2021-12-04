import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import OneProject from './Pages/AllProjects/OneProject';
import ThreeProject from './Pages/AllProjects/ThreeProject';
import TwoProjects from './Pages/AllProjects/TwoProjects';
import Contractform from './Pages/Contactform/Contractform';
import Education from './Pages/Education/Education';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/contactme">
            <Contractform></Contractform>
          </Route>
          <Route path="/oneprojects">
            <OneProject></OneProject>
          </Route>
          <Route path="/twoprojects">
            <TwoProjects></TwoProjects>
          </Route>
          <Route path="/threeproject">
            <ThreeProject></ThreeProject>
          </Route>
          <Route path="/education">
            <Education></Education>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
