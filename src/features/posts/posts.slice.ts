import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Post } from './posts.types'

interface PostsSlice {
  posts: Post[]
}

const initialState: PostsSlice = {
  posts: [] as Post[],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload)
      },
      prepare(payload: Omit<Post, 'id'>) {
        const id = nanoid()
        return { payload: { id, ...payload } }
      },
    },
  },
})

export const { addPost } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts.posts

export default postsSlice.reducer
