import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from './posts.slice'
import { AddPostForm } from './add-post-form'

export function Posts() {
  const posts = useSelector(selectPosts)

  return (
    <div>
      <div className="row">
        <AddPostForm />
      </div>
      {posts.map(({ id, title, content }) => (
        <article key={id}>
          <h2>{title}</h2>
          <p>{content}</p>
        </article>
      ))}
    </div>
  )
}
