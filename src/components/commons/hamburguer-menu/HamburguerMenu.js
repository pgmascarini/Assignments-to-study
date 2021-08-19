import { useState } from "react";

import Menu from "../menu/Menu";
import "./HamburguerMenu.css";

const HamburguerMenu = () => {

    const [state, setstate] = useState('hide-pop-up');
    const [state2, setstate2] = useState('show-pop-up');
    
    const mostrarPopUp = () => {
        setstate('show-pop-up');
        setstate2('hide-pop-up');
    }
    const fecharPopUp = () => {
        setstate('hide-pop-up');
        setstate2('show-pop-up');
    }

    return (
        <>
            <ul className="hamburguer">
                <li>
                    <button onClick={mostrarPopUp} className={`button-link ${state2}`}>Menu</button>
                </li>
            </ul>
            <div className={`pop-up ${state}`} onClick={fecharPopUp}>
                <Menu colorMobile={true} />
            </div>
        </>
    );
};

export default HamburguerMenu;