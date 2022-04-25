import { Middleware } from '@reduxjs/toolkit'

const KEY = 'redux_store'

export function getPersistedState() {
  const json = localStorage.getItem(KEY)
  if (json) {
    return JSON.parse(json)
  }
}

export function createPersistMiddleware(): Middleware {
  return store => next => action => {
    const result = next(action)
    const state = store.getState()
    const serializedState = JSON.stringify(state)

    localStorage.setItem(KEY, serializedState)

    return result
  }
}
