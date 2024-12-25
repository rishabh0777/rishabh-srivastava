import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Skill from "./components/Skill"

const App = () => {
  return (
    <main className="xsm:w-full xsm:min-h-[100svh] relative">
      <Nav />
      <Hero />
      <Skill />
    </main>
  )
}

export default App