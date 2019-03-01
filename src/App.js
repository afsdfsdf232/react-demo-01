import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Header from './common/header/index'
import Login from './page/login'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Home from './page/home'
import Detail from './page/detail'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header/>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
                <Login path='/login' exact component={Login} />
              </div>
            </BrowserRouter>
      </Provider>
    )
  }
  
}

export default App;
