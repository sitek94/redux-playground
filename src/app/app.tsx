import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Counter } from '../features/counter/counter'
import { Posts } from '../features/posts/posts'
import { Navbar } from './navbar'

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  )
}
