import React, { FC, ComponentType } from 'react';
import classes from './App.module.css'
import { BrowserRouter, Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { Provider, connect, ConnectedProps } from 'react-redux';
import store, { AppStateType } from './Redux/reduxStore';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { getIsFetching } from './Redux/selector';
import Preloader from './Components/Fregments/Preloader/Preloader';
import { compose } from 'redux';

const App: FC<PropsAppType> = props => {
  //* >>>
  // if (!props.isFetching) {
  //   return <Preloader img='' />
  // }
  //* >>>
  return (

    <Switch>
      <div className={classes.appWraper}>
        <div className={classes.headerApp}>
            <Header />
        </div>
        <div className={classes.bodyProject}>
          <Route path='/home' render={() => <Home />} />
          <Route path='' render={() => <Redirect to='/home' />} />
        </div>
        <div className={classes.footerApp}>
          <Footer />
        </div>
      </div>
    </Switch>

  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isFetching: getIsFetching(state)
  }
}

const connector = connect(mapStateToProps, {})

const AppContainer = compose<ComponentType>(
  withRouter,
  connector
)(App)

export default () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter >
  )
}

type PropsAppType = ConnectedProps<typeof connector>
