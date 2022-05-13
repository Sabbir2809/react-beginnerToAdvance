import Footer from './Components/layout/Footer'
import Header from './Components/layout/Header'
import Home from './Components/pages/Home/Home'
import './global.css'

function App() {
  return (
    <div>
        <Header />
        <Home description={"Google offered in: বাংলা"} />
        <Footer about={"About"} privacy={"Privacy"} terms={"Terms"} settings={"Settings"} />
    </div>
  )
}

export default App