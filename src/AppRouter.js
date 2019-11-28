import React from 'react';
import {  BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage';
import Admin from './components/Admin';


class AppRouter extends React.Component{
    render() {
       return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={MainPage} exact />
                    <Route path='/admin' component={Admin} exact />
                    <Route path='/categories/:id' component={MainPage} exact />
                    <Route path='/:id' component={MainPage} exact />
                    <Redirect from='*' to='/'/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
