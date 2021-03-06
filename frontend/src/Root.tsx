// App.js - react-hot-loader >= 4.5.4
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { hot } from 'react-hot-loader/root'
import newStoreConfig from './store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = newStoreConfig()

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default process.env.NODE_ENV === 'development' ? hot(Root) : Root
