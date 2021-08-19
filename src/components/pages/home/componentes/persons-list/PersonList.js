import PersonItem from "./person-item/PersonItem"
import "./PersonList.css";

const PersonList = ({ lista }) => {
    return (
        <div className="row">
            {
                lista.map(({ imagem, name }) => {
                    return (
                        <div key={name} className="col-3">
                            <PersonItem fotoCard={imagem} nameCard={name} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PersonList;