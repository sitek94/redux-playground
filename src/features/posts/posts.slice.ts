import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
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
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
    postRemoved(state, action) {
      const id = action.payload
      const postIndex = state.findIndex(post => post.id === id)
      state.splice(postIndex, 1)
    },
  },
})

export const { postAdded, postUpdated, postRemoved } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts

export const postsReducer = postsSlice.reducer
