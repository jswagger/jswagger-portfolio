import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/components.css'
import HomePage from './components/HomePage'
import SelectedWork from './components/SelectedWork'
import NotFound from './components/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<SelectedWork />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
