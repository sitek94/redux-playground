import * as React from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
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
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}
