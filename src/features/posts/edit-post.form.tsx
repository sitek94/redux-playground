import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { postUpdated } from './posts.slice'
import { useNavigate, useParams } from 'react-router-dom'

export const EditPostForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { postId } = useParams()

  const post = useAppSelector(state =>
    state.posts.find(post => post.id === postId),
  )
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  const [title, setTitle] = React.useState(post.title)
  const [content, setContent] = React.useState(post.content)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && content) {
      dispatch(postUpdated({ title, content }))
      navigate(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  )
}
