import Logo from "../logo/Logo"
import Menu from "../menu/Menu"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <nav className="nav-footer">
                <div className="centralizer">
                    <div className="col-8">
                        <Logo />
                        <p>The best you can do for yourself.</p>
                    </div>

                    <div className="col-4">
                        <h2>Site Map</h2>
                        <Menu />
                    </div>
                </div>
            </nav>

            <div className="footer">
                <div className="centralizer">
                    <smal>&copy; 2021 All rights reserved.</smal>
                </div>
            </div>
        </footer>
    );
}

export default Footer;