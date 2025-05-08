import { useState } from "react"

export default function Form(props) {
    const { handleCloseModal, handleUpdateData } = props

    const [name, setName] = useState('Alex')
    const [lifeExpectancy, setLifeExpectancy] = useState(80)

    const [month, setMonth] = useState(1) // stored as index from 1-12
    const [day, setDay] = useState(1)
    const [year, setYear] = useState(new Date().getFullYear())

    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)


    return (
        <section id="form">
            <div>
                <h4 className="text-gradient">Your Details: </h4>
                <button onClick={handleCloseModal} className='link-button'>
                    <i className="fa-solid fa-xmark" />
                </button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required value={name} onChange={(e) => { setName(e.target.value) }}/>
            </div>
            <div>
                <label>Birthday</label>
                <div className="bday">
                    <select value={day} onChange={(e) => { setDay(e.target.value) }}>
                        { days.map((day, dayIndex) => {
                            return <option key={dayIndex} value={day}>{ day }</option>
                        }) }
                    </select>
                    <select value={month} onChange={(e) => { setMonth(e.target.value) }}>
                        { months.map((month, monthindex) => {
                            return <option key={monthindex} value={monthindex + 1}>{ month }</option>
                        }) }
                    </select>
                    <select value={year} onChange={(e) => { setYear(e.target.value) }}>
                        { years.map((year, yearIndex) => {
                            return <option key={yearIndex} value={year}>{ year }</option>
                        }) }
                    </select>
                </div>
            </div>
            <div>
                <label>Life Expectancy (years)</label>
                <input value={lifeExpectancy} onChange={(e) => { setLifeExpectancy(parseInt(e.target.value)) }} type='number' max={120} required />
            </div>
            <button onClick={() => { handleUpdateData(name, `${year}-${month}-${day}`, lifeExpectancy) }}>
                Save
            </button>
        </section>
    )
}