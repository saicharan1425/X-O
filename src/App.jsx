
import './App.css'
import { Dashboard } from './Dashboard'
import { UserContext } from './UserContext'

function App() {
  const user={
    name:'Charan',
    role:'dev',
  }

  return (
    
      <UserContext value={user}>
      <Dashboard />
   </UserContext>
  
  )
}

export default App
