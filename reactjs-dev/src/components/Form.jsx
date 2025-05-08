import { useState } from "react"

export default function Form(props) {
    const { handleCloseModal, handleUpdateData } = props

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
                <h4 class="text-gradient">Your Details: </h4>
                <button onClick={handleCloseModal} className='link-button'>
                    <i className="fa-solid fa-xmark" />
                </button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required />
            </div>
            <div>
                <label>Birthday</label>
                <div className="bday">
                    <select>
                        { days.map((day, dayIndex) => {
                            return <option key={dayIndex} value={day}>{ day }</option>
                        }) }
                    </select>
                    <select>
                        { months.map((month, monthindex) => {
                            return <option key={monthindex} value={month}>{ month }</option>
                        }) }
                    </select>
                    <select>
                        { years.map((year, yearIndex) => {
                            return <option key={yearIndex} value={year}>{ year }</option>
                        }) }
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="life_expectancy">Life Expectancy (years)</label>
                <input id="life_expectancy" type="number" max={120} min={0} required/>
            </div>
            <button onClick={() => {}}>
                Save
            </button>
        </section>
    )
}