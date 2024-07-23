import ImgText from "../../components/ImgText/ImgText";
import texts from "../../helpers/text";
import CreateTurn from "../CreateTurn/CreateTurn";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useState } from "react";
//import styles
const Home = () => {
    const [textToShow, setTextToShow] = useState(texts);
    return (
        <>
        <div>
            <h3>Bienvenido al Gestor de Turnos de este Centro medico sin nombre oficial</h3>
            {
                textToShow.map((text) => {
                    return <ImgText text = {text}/>
                })
            }
        </div>
        </>
    )
}

export default Home;