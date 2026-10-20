import { Route, Routes } from 'react-router-dom'
import './components/components.css'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
