import { useState } from "react";
import image from "../icons/drop-down.png";
import "../App.css"
const Infos = () => {
    const [langDisplayed, setLangDisplayed] = useState(false);
    const [locationDisplayed, setLocationDisplayed] = useState(false);

    const langs = ["English", "arabic", "francai"];
    const locations = ["Morocco", "USA", "France"];

    return <div className="header-infos">
        <p className="header-left">
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e884fbeaf853f075555d17_Call.svg" alt="" />
            &nbsp;+2120548115524
        </p>
        <p className="header-middle">
            Get 50% Off on Selected Items &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Shop Now
        </p>
        <div className="header-right">
            <div className="language" onClick={() => { setLangDisplayed(!langDisplayed); setLocationDisplayed(false) }}>
                Lang&nbsp;&nbsp;
                <img src={image} alt="" className="drop-icon" />
                <ul className={langDisplayed ? "langs-ul-display" : "langs-ul"}>
                    {
                        langs.map((lang) => <li value={lang} onClick={(e) => console.log(lang)} key={Math.random()}>
                            {lang}
                        </li>)
                    }
                </ul>
            </div>
            <div className="location" onClick={() => { setLocationDisplayed(!locationDisplayed); setLangDisplayed(false) }}>
                location&nbsp;&nbsp;
                <img src={image} alt="" className="drop-icon" />
                <ul className={locationDisplayed ? "langs-ul-display" : "langs-ul"}>
                    {
                        locations.map((location) => <li key={Math.random()}>
                            {location}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
}

export default Infos;