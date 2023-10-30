import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Dashboard></Dashboard>
          <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
