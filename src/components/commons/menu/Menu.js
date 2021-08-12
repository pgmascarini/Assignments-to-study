import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = ({ navHorizontal, hideHome, colorMobile }) => {
    return (
        <nav className="navigation">
            <ul className={navHorizontal ? 'horizontal' : ''}>
                <li className={hideHome ? 'hide' : ''}>
                    <Link className={colorMobile ? 'navColor' : ''} to="/">Home</Link>
                </li>
                <li>
                    <Link className={colorMobile ? 'navColor' : ''} to="/#courses">Our Courses</Link>
                </li>
                <li>
                    <Link className={colorMobile ? 'navColor' : ''} to="/#teachers">Our teachers</Link>
                </li>
                <li>
                    <Link className={colorMobile ? 'navColor' : ''} to="#students">Our Students</Link>
                </li>
                <li>
                    <Link className={colorMobile ? 'navColor' : ''} to="/private">Private area</Link>
                </li>
            </ul>
            <ul className="hamburguer">
                <li>
                    <button className="button-link">Menu</button>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;


