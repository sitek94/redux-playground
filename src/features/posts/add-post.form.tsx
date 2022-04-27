import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { postAdded } from './posts.slice'

export const AddPostForm = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [userId, setUserId] = React.useState('')

  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  const canSave = title && content && userId

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (canSave) {
      dispatch(
        postAdded({
          title,
          content,
          userId,
        }),
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        >
          <option value="" />
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
