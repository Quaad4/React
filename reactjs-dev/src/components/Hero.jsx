export default function Hero(props) {
    const { name, data, percentage }  = props
    return (
        <section id="hero">
            <h3 className="text-large">
                {name}, you have {data.weeks} weeks left. Make them count 🫡
            </h3>
            <div className="btns-container">
                <button>Not {name}?</button>
                <button className="link-button">Copy link</button>
                <button className="link-button">Reset</button>
            </div>
            <div className="progress-bar">
                <div>
                    <div>
                        <i className="fa-solid fa-baby" />
                        <h6 className="bar-label">Birth</h6>
                    </div>
                    <h6>{percentage}</h6>
                </div>
                <div>
                    <h6 className="bar-label">Death</h6>
                    <i className="fa-solid fa-skull" />
                </div>
            </div>
        </section>
    )
}