import Logo from "../logo/Logo"
import Menu from "../menu/Menu"
import "./Footer.css"

const Footer = (estaLogado, mudarEstadoLogado) => {
    const currentYear = new Date().getFullYear();
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
                        <Menu estaLogado={estaLogado} mudarEstadoLogado={mudarEstadoLogado} />
                    </div>
                </div>
            </nav>

            <div className="footer">
                <div className="centralizer">
                    <small>&copy; {currentYear} All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;