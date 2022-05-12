import Footer from './Components/layout/Footer'
import Header from './Components/layout/Header'
import Home from './Components/pages/Home/Home'
import './global.css'

function App() {
  return (
    <div>
        <Header />
        <Home des={"Google offered in: বাংলা"} />
        <Footer country={"Bangladesh"} about={"About"} advertising={"Advertising"} business={"Business"} works={"How Search Works"} />
    </div>
  )
}

export default App