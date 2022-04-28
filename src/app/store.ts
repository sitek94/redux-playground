import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { counterReducer } from '../features/counter/counter.slice'
import { postsReducer } from '../features/posts/posts.slice'
import { usersReducer } from '../features/users/users.slice'

import { createPersistMiddleware, getPersistedState } from './persist'

const reducers = {
  counter: counterReducer,
  posts: postsReducer,
  users: usersReducer,
}
const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>
export type SliceName = keyof typeof reducers

const slicesToPersist: SliceName[] = ['counter', 'posts']

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPersistedState(slicesToPersist),
  middleware: [createPersistMiddleware(slicesToPersist)],
})

export type AppDispatch = typeof store.dispatch
