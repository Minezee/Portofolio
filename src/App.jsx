import { Navbar, Home, Footer, Skill, Projects } from "./components"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Skill />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App