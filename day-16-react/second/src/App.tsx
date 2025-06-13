import './App.css'
import Greeting from './component/greeting'
import Welcome from './component/welcome'
import Counter from './component/counter'

function App() {

  return (
    <>
      <div>
        <Welcome />
        <Greeting name="Aqeel"></Greeting>
        <Counter />
      </div>
    </>
  )
}

export default App
