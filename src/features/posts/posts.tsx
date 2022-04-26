import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from './posts.slice'
import { AddPostForm } from './add-post-form'

export function Posts() {
  const posts = useSelector(selectPosts)
  if (!posts?.length) {
    return <h3>No posts</h3>
  }
  return (
    <div>
      {posts.map(({ id, title, content }) => (
        <article key={id}>
          <h3>{title}</h3>
          <p>{content}</p>
        </article>
      ))}
    </div>
  )
}
