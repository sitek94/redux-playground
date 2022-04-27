import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { counterReducer } from '../features/counter/counter.slice'
import { postsReducer } from '../features/posts/posts.slice'
import { usersReducer } from '../features/users/users.slice'

import {
  createPersistMiddleware,
  getPersistedState,
} from '../middlewares/persist'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
  preloadedState: getPersistedState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, createPersistMiddleware()),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
