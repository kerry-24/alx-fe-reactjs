import UserProfile from './components/UserProfile'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <UserProfile name= "Alice" age= "25" bio= "Loves hiking and photography" />
    </div>
  );
}
export default App


