import { HashLink } from 'react-router-hash-link';
import "./Menu.css"

const Menu = ({ navHorizontal, hideHome, colorMobile, estaLogado, mudarEstadoLogado }) => {
const logout = () => {
    mudarEstadoLogado(false)
}
    
    return (
        <nav className="navigation">
            <ul className={navHorizontal ? 'horizontal' : ''}>
                <li className={hideHome ? 'hide' : ''}>
                    <HashLink className={colorMobile ? 'navColor' : ''} to="/">Home</HashLink>
                </li>
                <li>
                    <HashLink className={colorMobile ? 'navColor' : ''} to="/#courses">Our Courses</HashLink>
                </li>
                <li>
                    <HashLink className={colorMobile ? 'navColor' : ''} to="/#teachers">Our teachers</HashLink>
                </li>
                <li>
                    <HashLink className={colorMobile ? 'navColor' : ''} to="/#students">Our Students</HashLink>
                </li>
                <li>
                    <HashLink className={colorMobile ? 'navColor' : ''} to="/private">Private area</HashLink>
                </li>
                {estaLogado ? <li>
                    <button className={colorMobile ? 'navColor' : ''} onClick={logout}>Logout</button>
                </li> : ''}
            </ul>
        </nav>
    );
};

export default Menu;


