import CourseItem from "./course-item/CourseItem";

const CoursesList = () => {

    const courseArray = [{
        title: 'Vanilla',
        description: 'VanillaJS is a name to refer to using plain JavaScript without any additional libraries like jQuery back in the days.'
    }, {
        title: 'React',
        description: 'React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state.'
    }, {
        title: 'Angular',
        description: 'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces.'
    }];

    return (
        <div className="row">
            {
                courseArray.map(({ title, description }) => {
                    return (
                        <div key={title} className="col-4">
                            <CourseItem titulo={title} descricao={description} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CoursesList;