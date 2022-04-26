import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Counter } from '../features/counter/counter'
import { Navbar } from './navbar'
import { AddPostForm } from '../features/posts/add-post-form'
import { PostsList } from '../features/posts/post-llist'

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
        <Route path="counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}
