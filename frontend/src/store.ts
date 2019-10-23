import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware()
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(createLogger())
  }
}

export const store = createStore(reducer, getMiddleware())
