import { Route, Routes } from 'react-router-dom'
import './App.css'
import './components/components.css'
import HomePage from './components/HomePage'
import SelectedWork from './components/SelectedWork'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/:slug" element={<SelectedWork />} />
    </Routes>
  )
}

export default App
