import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createHashHistory'
import {Provider} from 'react-redux'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import {Route} from 'react-router'

import 'react-virtualized/styles.css'

import './styles.css'

import App from './routes/App'

import createStore from './stores'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore({middleware})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'))
