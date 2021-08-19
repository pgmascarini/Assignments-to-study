import Banner from "./componentes/banner/Banner"
import CoursesList from "./componentes/courses-list/CoursesList";
import PersonList from "./componentes/persons-list/PersonList";
import Title from "./componentes/titles/Title"

const Home = () => {
    const ListaProfessor = [{
        imagem: 'https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=',
        name: 'Maria'
    }, {
        imagem: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=',
        name: 'Mario'
    }, {
        imagem: 'https://i.insider.com/5cb8b133b8342c1b45130629?width=700',
        name: 'Katia'
    }, {
        imagem: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        name: 'Leda'
    }, {
        imagem: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=',
        name: 'Augusto'
    }];


    const ListaEstudante = [{
        imagem: 'https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=',
        name: 'Vanessa'
    }, {
        imagem: 'https://mk0timesnextw7n7qiu0.kinstacdn.com/wp-content/uploads/2020/01/vishesh-bajaj-startup-knot9-provides-royalty-free-stock-videos-images.jpg',
        name: 'Nicolas'
    }, {
        imagem: 'https://i.insider.com/5cb8b133b8342c1b45130629?width=700',
        name: 'Isabelly'
    }];


    return (
        <main className="centralizer">
            <Banner />
            <Title description="Our Courses" identification="courses" />
            <CoursesList />
            <Title description="Our Teachers" identification="teachers" />
            <PersonList lista={ListaProfessor} />
            <Title description="Our Students" identification="students" />
            <PersonList lista={ListaEstudante} />
        </main>
    );
}

export default Home;


