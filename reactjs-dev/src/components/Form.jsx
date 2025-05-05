export default function Form(props) {
    const { handleCloseModal, handleUpdateData } = props

    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

    return (
        <section id="form">
            <div>
                <h4 className="text-gradient">
                    Your Details
                </h4>
                <button className="link-button" onClick={ handleCloseModal }><
                    i className="fa-solid fa-xmark" />
                </button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required />
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <div className="bday">
                    <select>
                        {days.map((day, dayIndex) => {
                            return (
                                <option key={dayIndex} value="day">{day}</option>
                            )
                        })}
                    </select>
                    <select>
                        {months.map((month, monthIndex) => {
                            return (
                                <option key={monthIndex} value={monthIndex + 1}>{month}</option>
                            )
                        })}
                    </select>
                    <select>
                        {years.map((year, yearIndex) => {
                            return (
                                <option key={yearIndex} value={year}>{year}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div>
                <label>Life Expectancy (Years)</label>
                <input type="number" max={120} min={1} required />
            </div>
            <button onClick={() => { }}>
                Save
            </button>
        </section>
    )
}