import './App.css'
import User from './components/User'

function App() {


  return (
    <div>
      <User name="Mortuja" age={100} isRegistered/>
      <User name='ABC' age={101} isRegistered={false}/>
    </div>
  )
}

export default App
