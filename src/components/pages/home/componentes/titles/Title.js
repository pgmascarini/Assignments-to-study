import "./Title.css";

const Title = ({ description, identification }) => {
    return (
        <h2 className="titles" id={identification}>
            {description}
        </h2>
    );
};

export default Title;