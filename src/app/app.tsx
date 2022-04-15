import { Counter } from '../features/counter/counter'
import './app.css'

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Playground</h1>
        <Counter />
      </header>
    </div>
  )
}
