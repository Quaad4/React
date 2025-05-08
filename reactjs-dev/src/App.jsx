import Clocks from "./components/Clocks"
import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from "./utils"
import Portal from "./components/Portal"
import Form from "./components/Form"
import { useEffect, useState } from "react"

function App() {
  const [name, setName] = useState('Alex');
  const [birthDate, setBirthDate] = useState('1995-06-15')
  const [lifeExpectancy, setLifeExpectancy] = useState(80)
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(calculateTimeLeft(birthDate, lifeExpectancy))

  function handleModalChange() {
    setShowModal(!showModal)
  }

  function resetData() {
    setName('Alex')
    setBirthDate('1995-06-15')
    setLifeExpectancy(80)
    localStorage.clear()
  }

  function handleUpdateData(n, b, e) {
    if(!n || !b || !e) {
      return
    }

    //Saving to local storage
    localStorage.setItem('formData', JSON.stringify({name: n, birthDate: b, lifeExpectancy: e}))

    setName(n)
    setBirthDate(b)
    setLifeExpectancy(parseInt(e))
    handleModalChange()
  }

  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  useEffect(() => {
    if(!localStorage) {
      return
    }
    if(localStorage.getItem('formData')) {
      const {name: n, birthDate: b, lifeExpectancy: e} = JSON.parse(localStorage.getItem('formData'))
      setName(n);
      setBirthDate(b)
      setLifeExpectancy(parseInt(e))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setData(calculateTimeLeft(birthDate, lifeExpectancy))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [birthDate, lifeExpectancy])

  return (
    <Layout>
        {showModal && (<Portal handleCloseModal={handleModalChange}>
            <Form 
              handleCloseModal={handleModalChange}
              handleUpdateData={handleUpdateData}
              name={name}
              setName={setName}
              lifeExpectancy={lifeExpectancy}
              setLifeExpectancy={setLifeExpectancy} 
            />
          </Portal>
        )}
        <Hero name={name} data={data} percentage={percentage} handleModalChange={handleModalChange} resetData={resetData}/>
        <Clocks data={data} />
        <Calendar data={data} lifeExpectancy={lifeExpectancy} />
        <Summary lifeExpectancy={lifeExpectancy} birthDate={birthDate} />
    </Layout>
  )
}

export default App
