import Clocks from "./components/Clocks"
import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from "./utils"
import Portal from "./components/Portal"
import Form from "./components/Form"

function App() {
  const name = 'Alex'
  const birthDate = '1995-06-15'
  const lifeExpectancy = 80
  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)
  const data = calculateTimeLeft(birthDate, lifeExpectancy)
  const showModal = true

  return (
    <Layout>
        {showModal && (<Portal>
            <Form />
          </Portal>
        )}
        <Hero name={name} data={data} percentage={percentage} />
        <Clocks data={data} />
        <Calendar data={data} lifeExpectancy={lifeExpectancy} />
        <Summary lifeExpectancy={lifeExpectancy} birthDate={birthDate} />
    </Layout>
  )
}

export default App
