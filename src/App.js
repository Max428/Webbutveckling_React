import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Settings from './Pages/Settings';
import StartPage from './Pages/StartPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route path="/" exact={true} title="Hem" component={Home} />
          <Route path="/portfolio" title="Portfölj" component={Portfolio} />
          <Route path="/settings" title="Inställningar" component={Settings} />
          <Route path="/startPage" title="Start Page" component={StartPage} />
        </Switch>
      </div>      
    </BrowserRouter> 
  );
};
export default App;
