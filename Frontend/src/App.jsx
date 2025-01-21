import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Skill from "./components/Skill"
import Work from "./components/Work"
import About from "./components/About"

const App = () => {
  return (
    <main className="xsm:w-full xsm:min-h-[100svh] relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Skill />
      <Work />
      <About />
    </main>
  )
}

export default App;