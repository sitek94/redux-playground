import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Link } from 'react-router-dom'
import { postRemoved } from './posts.slice'

export function PostsList() {
  const posts = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <button
        className="muted-button"
        onClick={() => dispatch(postRemoved(post.id))}
      >
        ❌ Remove post
      </button>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
