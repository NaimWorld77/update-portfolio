import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Contractform from './Pages/Contactform/Contractform';
import Footer from './Pages/Footer/Footer';
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
          {/* <Route path="/footer">
            <Footer></Footer>
          </Route> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
