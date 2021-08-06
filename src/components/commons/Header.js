import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <header>

            <nav id="banana">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">About me</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;