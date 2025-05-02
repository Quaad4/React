import Clocks from "./components/Clocks"
import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Calendar from './components/Calendar'
import Summary from './components/Summary'

function App() {
  return (
    <Layout>
        <Hero />
        <Clocks />
        <Calendar />
        <Summary />
    </Layout>
  )
}

export default App
