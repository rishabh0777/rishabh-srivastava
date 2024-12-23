import Hero from "./components/Hero"
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="xsm:w-full xsm:min-h-screen relative">
      <Nav />
      <Hero />
    </main>
  )
}

export default App