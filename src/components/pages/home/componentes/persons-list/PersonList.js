import PersonItem from "./person-item/PersonItem"
import "./PersonList.css";

const PersonList = ({ lista }) => {
    if (lista.length === 0) {
        return (<p className="sem-dados">There is no data to be showed.</p>)
    }

    return (
        <div className="row">
            {
                lista.map(({ picture, name}) => {
                    return (
                        <div key={name.first} className="col-3">
                            <PersonItem fotoCard={picture} nameCard={name} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PersonList;