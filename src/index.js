import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MessageBox from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <MessageBox />
  </Provider>,
  document.getElementById('root')
)