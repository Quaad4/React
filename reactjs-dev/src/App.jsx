import Clocks from "./components/Clocks"
import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from "./utils"

function App() {
  const name = 'Alex'
  const birthDate = '1995-06-15'
  const lifeExpectancy = 80
  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)
  const data = calculateTimeLeft(birthDate, lifeExpectancy)

  return (
    <Layout>
        <Hero name={name} data={data} percentage={percentage}/>
        <Clocks />
        <Calendar />
        <Summary />
    </Layout>
  )
}

export default App
