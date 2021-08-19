import "./CourseItem.css";

const CourseItem = ({titulo, descricao}) => {
    return (
        <div className="course-item">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        </div>
    );
};

export default CourseItem;