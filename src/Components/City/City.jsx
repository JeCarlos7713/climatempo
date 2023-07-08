import "./City.css"

export default function City({props}) {
    return (
        <>
            <section className="city-info">
                <div className="row cityInfo">
                    <span id="cityName">{props.name}</span>
                    <span id="temp">{props.main.temp}</span>
                </div>
                <div className="row">
                    <span id="status">{props.weather[0].description}</span>
                    <span id="media">Min. {props.main.temp_min}° / Máx. {props.main.temp_max}°</span>
                </div>
            </section>
        </>
    )
}