import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Components/Title'
import TeamDropdown from './Components/TeamDropdown'
import Psychic from './ESPN/Client'

function App() {

  
  return <div>
    <Title />
    <TeamDropdown />
    </div>
}

export default App
