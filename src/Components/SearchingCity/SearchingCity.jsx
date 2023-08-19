import "./SearchingCity.css"
import { useState } from "react"
import City from "../City/City"

export default function SearchingCity() {
    const [data, setData] = useState("")

    const getData = async () => {
        const infosGetWeather = {
            location: document.querySelector("#txt_busca_cidade").value,
            apiKey: "7d9eeb8ace209da0d28e33e2dd6d0fcf"
        }

        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${infosGetWeather.location}&lang=pt_br&appid=${infosGetWeather.apiKey}&units=metric`)
            .then(res => res.json())
            .then(res => { return res })

        console.log(data)
        setData(await data)
    }

    return (
        <>
            <section className="box">
                <div className="title">
                    <h2>Qual cidade você quer ver agora?</h2>
                </div>
                <div className="search">
                    <input type="text" name="txt_busca_cidade" id="txt_busca_cidade" placeholder="Busque por uma cidade" />
                    <button onClick={getData}>Buscar</button>
                </div>
            </section>

            <section className="box">
                {data && (
                    <City props={data} />
                )}
            </section>
        </>
    )
}