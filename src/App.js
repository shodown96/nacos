import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Placements from './containers/Placements';
import Questions from './containers/Questions';
import Contact from './containers/Contact';
import Executives from './containers/Executives';
import Blog from './containers/Blog';
import ErrorPage from './containers/ErrorPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
            <Route path="/past-placements" component={Placements}/>
            <Route path="/past-questions" component={Questions}/>
            <Route path="/executives" component={Executives}/>
            <Route path="/tech-news" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={Home}/>
            <Route path="" component={ErrorPage}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

