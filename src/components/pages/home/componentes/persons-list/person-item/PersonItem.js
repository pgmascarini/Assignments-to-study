import "./PersonItem.css";
import Popup from "./pop-up/Popup";
import { useState } from 'react';

const PersonItem = ({ pessoaInfo }) => {
    const [state, setstate] = useState(false)
    const abrePopup = () => {
        setstate(true)
    }

    const fecharPopup = () => {
        setstate(false)
    }

    return (
        <>
            <div className="card">
                <img src={pessoaInfo.picture.large} alt={`Foto da ${pessoaInfo.name.first}`}></img>

                <div className="card-position">
                    <button onClick={abrePopup}> + </button>
                    <p>{pessoaInfo.name.first}</p>
                </div>
            </div>
            {state ? <Popup dadosPessoa={pessoaInfo} cerrarPopup={fecharPopup} /> : ''}
        </>
    );
};

export default PersonItem;