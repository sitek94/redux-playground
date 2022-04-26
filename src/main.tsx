import './styles/index.css'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './app/app'
import { store } from './app/store'
import { worker } from './api/server'

// Wrap app rendering, so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

start()
