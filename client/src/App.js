import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages Navigation
import Home from './pages/Home';
import Skills from './pages/Skills';
import Dev from './pages/Dev';
import Creative from './pages/Creative';
import Work from './pages/Work';
import ErrorPage from './pages/404';

// Components
import Navigation from './components/Navigation';
import Logo from './components/Logo';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Logo />
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/dev" component={Dev} />
                    <Route path="/creative" component={Creative} />
                    <Route path="/work" component={Work} />
                    <Route component={ErrorPage} />
                </Switch>
                </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;