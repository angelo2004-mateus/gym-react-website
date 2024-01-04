import './App.css'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Plans from './components/Plans'
import SomeReasons from './components/SomeReasons'
import Testimonials from './components/Testimonials'
import Programing from './components/Programing'


function App() {

  return (
    <div className='px-5 bg-[#3c3f45]'>
      <Header />
      <Programing />
      <SomeReasons />
      <Plans />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
