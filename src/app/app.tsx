import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Counter } from '../features/counter/counter'
import { Navbar } from './navbar'
import { AddPostForm } from '../features/posts/add-post.form'
import { PostsList } from '../features/posts/post-llist'
import { SinglePostPage } from '../features/posts/single-post.page'
import { EditPostForm } from '../features/posts/edit-post.form'

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          }
        />
        <Route path="/posts/:postId" element={<SinglePostPage />} />
        <Route path="/edit-post/:postId" element={<EditPostForm />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}
