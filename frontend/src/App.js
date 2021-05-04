import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import Navigation from './Components/Navigation/Navigation.js'
import Footer from './Components/Navigation/Footer.js'

// Pages 
import Home from './Pages/Home.js';


const App = () => {
  return (
    <div className="App">
      <Navigation />
        <Switch> 
          <Route exact path="/" component={Home} />
        </Switch>  
      <Footer />
    </div>
  );
}

export default App;
