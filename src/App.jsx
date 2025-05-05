import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import InventoryPage from './pages/InventoryPage'
import CombatPage from './pages/CombatPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jeu' element={<GamePage />} />
        <Route path='/inventaire' element={<InventoryPage />} />
        <Route path='/combat' element={<CombatPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
