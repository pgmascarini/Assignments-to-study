import "./Estudantes.css";
import Loading from "../../../commons/loading/Loading";
import { useState, useEffect } from "react";

const Estudantes = () => {
    const [original, setoriginal] = useState([]);
    const [listaUso, setlistaUso] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50&seed=brazil&nat=br')
            .then((response) => response.json())
            .then(({ results }) => {
                const listaOrdenada = results.sort((a, b) => a.name.first.localeCompare(b.name.first));

                setoriginal(listaOrdenada)
                setlistaUso(listaOrdenada)
            })
            .finally(() => {
                setloading(false)
            })
    }, [])

    const filtroNome = (evt) => {
        console.log(evt.target.value)
        const listaFiltrada = original.filter((item) => {
            return item.name.first.indexOf(evt.target.value) >= 0;
        });

        if (listaFiltrada.length > 0) {
            setlistaUso(listaFiltrada)
        } else {
            setlistaUso(original)
        }

    }



    if (loading) {
        return (<Loading />)
    }

    return (
        <div className="centralizer students">
            <h1>Students</h1>
            <fieldset>
                <legend>Filter</legend>

                <form className="row">
                    <div className="col-4">
                        <label>Name</label>
                        <input onChange={filtroNome} type="text" />
                    </div>

                    <div className="col-4">
                        <label>Genre</label>
                        <select>
                            <option>Both</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div className="col-4">
                        <label>Age</label>
                        <input type="number" />
                    </div>
                </form>
            </fieldset>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {/* {listaUso.map(({name, email}) => {})}      desconstruido item */}

                <tbody>
                    {listaUso.map((item) => {
                        return (<tr key={item.name.first}>
                            <td>{`${item.name.first} ${item.name.last}`}</td>
                            <td>{item.email}</td>
                            <td>
                                <button id={item.email}>select</button>
                            </td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default Estudantes;