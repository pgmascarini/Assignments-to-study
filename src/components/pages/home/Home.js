import Banner from "./componentes/banner/Banner"
import CoursesList from "./componentes/courses-list/CoursesList";
import PersonList from "./componentes/persons-list/PersonList";
import Title from "./componentes/titles/Title";
import { useState, useEffect } from "react";
import Loading from "../../commons/loading/Loading";

const Home = () => {
    const [loading, setloading] = useState(true);
    const [listaprofessor, setlistaprofessor] = useState([]);
    const [listaestudante, setlistaestudante] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20&seed=brazil&nat=br')
            .then((response) => response.json())
            .then(({ results }) => {
                const profes = results.filter(({ dob }) => dob.age > 60);
                const alunos = results.filter(({ dob }) => dob.age <= 60);

                setlistaprofessor(profes)
                setlistaestudante(alunos)
            })
            .finally(() => {
                setloading(false)
            })
    }, []);

    return (
        <main className="centralizer">
            <Banner />
            <Title description="Our Courses" identification="courses" />
            <CoursesList />
            <Title description="Our Teachers" identification="teachers" />
            {loading ? <Loading /> : <PersonList lista={listaprofessor} />}
            <Title description="Our Students" identification="students" />
            {loading ? <Loading /> : <PersonList lista={listaestudante} />}
        </main>
    );
}

export default Home;


