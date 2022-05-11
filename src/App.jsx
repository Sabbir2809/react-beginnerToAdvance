import Footer from './Components/layout/Footer'
import Header from './Components/layout/Header'
import About from './Components/pages/about/About'
import Home from './Components/pages/home/Home'
import './global.css'

function App() {
  return (
    <div>
        <Header />
        <div className='body'>
            <Home />
        </div>
        <div className='body'>
            <About />
        </div>
        
        <Footer />
    </div>
  )
}

export default App