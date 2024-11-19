import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Dwalker from './pages/Dwalker/Dwalker'
import Profile from './pages/Profile/Profile'
import Header from "./modules/Header"
import About from "./pages/About/About"
import Contact from './pages/Contact/Contact'
import Footer from "./modules/Footer"

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dwalker" element={<Dwalker/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
