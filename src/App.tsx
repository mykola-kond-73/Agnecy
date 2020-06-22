import React, { FC } from 'react';
import classes from './App.module.css'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Provider, connect, ConnectedProps } from 'react-redux';
import store, { AppStateType } from './Redux/reduxStore';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { getIsFetching } from './Redux/selector';
import Preloader from './Components/Fregments/Preloader/Preloader';

const App: FC<PropsAppType> = props => {
  if (!props.isFetching) {
    return <Preloader img='' />
  }
  return (
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
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isFetching: getIsFetching(state)
  }
}

const connector = connect(mapStateToProps, {})

export default connector(App)

type PropsAppType = ConnectedProps<typeof connector>
