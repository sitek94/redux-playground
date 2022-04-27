import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Post } from './posts.types'

const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      prepare(payload: Omit<Post, 'id'>) {
        const id = nanoid()
        return { payload: { id, ...payload } }
      },
    },
  },
})

export const { postAdded } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts

export default postsSlice.reducer
