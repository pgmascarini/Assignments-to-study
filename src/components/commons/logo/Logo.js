import { Link } from "react-router-dom";
import "./Logo.css"

const Logo = () => {
    return (
        <Link to="/" className="colorLogo">
            JSchool
        </Link>
    );
};

export default Logo;