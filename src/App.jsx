import './App.css'
import Plans from './components/Plans'
import SomeReasons from './components/SomeReasons'
import Testimonials from './components/Testimonials'
import Programing from './components/programing'


function App() {

  return (
    <div className='px-5 bg-[#3c3f45]'>
      <Programing />
      <SomeReasons />
      <Plans />
      <Testimonials />
    </div>
  )
}

export default App
