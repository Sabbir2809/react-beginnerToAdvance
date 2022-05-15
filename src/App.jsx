import Footer from './Components/layout/Footer'
import Header from './Components/layout/Header'
import Home from './Components/pages/Home/Home'
import './global.css'

function App() {
  return (
    <div>
        <Header />
        <Home description={"Google offered in: "} lang={" বাংলা"} />
        <Footer />
    </div>
  )
}

export default App