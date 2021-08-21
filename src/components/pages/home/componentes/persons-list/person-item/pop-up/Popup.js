import "./Popup.css"

const Popup = ({ dadosPessoa, cerrarPopup }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <div className="row">
                     <div className="col-5">
                        <img src={dadosPessoa.picture.large} alt={dadosPessoa.name.first}></img>
                    </div>
                    <div className="col-6">
                        <h2>{`${dadosPessoa.name.first} ${dadosPessoa.name.last}`}</h2>
                        <p>
                            <strong>Phone: </strong>
                            {dadosPessoa.phone}
                        </p>
                       <p>
                            <strong>Cell: </strong>
                            {dadosPessoa.cell}
                        </p>
                        <p>
                            <strong>E-mail: </strong>
                            {dadosPessoa.email}
                        </p>
                        <p>
                            <strong>Adress: </strong>
                            {dadosPessoa.location.street.name} - N {dadosPessoa.location.street.number}
                        </p>
                        <p>
                            <strong>City: </strong>
                            {dadosPessoa.location.city}
                        </p>
                         <p>
                            <strong>State: </strong>
                            {dadosPessoa.location.state}
                        </p>
                        <p>
                            <strong>Postcode: </strong>
                            {dadosPessoa.location.postcode}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button onClick={cerrarPopup}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;