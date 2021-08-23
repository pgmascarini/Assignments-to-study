import "./Error.css";

const Error = ({mensagemErro}) => {
    return (
        <div className="row">
            <div className="col-12 error-message">
                <p>{mensagemErro}</p>
            </div>
        </div>
    );
};

export default Error;