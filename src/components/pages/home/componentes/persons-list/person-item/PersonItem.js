import "./PersonItem.css";

const PersonItem = ({nameCard, fotoCard}) => {

    return (
        <div className="card">
            <img src={fotoCard.medium} alt={`Foto da ${nameCard.first}`}></img>

            <div className="card-position">
                <button> + </button>
                <p>{nameCard.first}</p>
            </div>
        </div>
    );
};

export default PersonItem;