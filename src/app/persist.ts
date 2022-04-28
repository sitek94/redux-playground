import { Middleware } from '@reduxjs/toolkit'
import { RootState, SliceName } from './store'

const KEY = 'redux_store'

export function getPersistedState(slices: SliceName[]): Partial<RootState> {
  const stateJson = localStorage.getItem('redux_store')
  if (!stateJson) {
    return {}
  }
  const persistedState = JSON.parse(stateJson)

  const state = slices.reduce((acc, slice) => {
    acc[slice] = persistedState[slice]
    return acc
  }, {} as Partial<RootState>)

  return state
}

export function createPersistMiddleware(
  slicesToPersist: SliceName[],
): Middleware {
  return store => next => action => {
    const result = next(action)
    const state = store.getState()
    const stateToPersist = slicesToPersist.reduce((acc, slice) => {
      acc[slice] = state[slice]
      return acc
    }, {} as Partial<RootState>)

    const serializedState = JSON.stringify(stateToPersist)

    localStorage.setItem(KEY, serializedState)

    return result
  }
}
