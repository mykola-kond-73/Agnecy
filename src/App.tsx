import React from 'react';
import classes from './App.module.css'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <div>
              <Header />
              <div>
                <Route path='/home' render={() => <Home />} />
                <Route path='' render={() => <Redirect to='/home' />} />
              </div>
              <Footer />
            </div>
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
