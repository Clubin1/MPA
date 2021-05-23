import { Switch, Route } from 'react-router-dom';

// Components
import Navigation from './Components/UI/Navigation.js'
import Footer from './Components/UI/Footer.js'

// Pages 
import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Professionals from './Components/Pages/Professionals.js';

const App = () => {
  return (
    <div className="App">
      <Navigation />
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/membership" component={Professionals} />
        </Switch>  
      <Footer />
    </div>
  );
}

export default App;
