import "./PersonItem.css";

const PersonItem = ({nameCard, fotoCard}) => {

    return (
        <div className="card">
            <img src={fotoCard} alt={`Foto da ${nameCard}`}></img>

            <div className="card-position">
                <button> + </button>
                <p>{nameCard}</p>
            </div>
        </div>
    );
};

export default PersonItem;