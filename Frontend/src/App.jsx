import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Skill from "./components/Skill"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="xsm:w-full xsm:min-h-[100svh] relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Skill />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;