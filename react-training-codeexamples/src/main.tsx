import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Start MSW worker in development
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')

    // Start the worker
    return worker.start({
      onUnhandledRequest: 'bypass', // Allow non-mocked requests to pass through
    })
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
