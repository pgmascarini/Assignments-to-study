import HamburguerMenu from "../hamburguer-menu/HamburguerMenu";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import "./Header.css";

const Header = ({ estaLogado, mudarEstadoLogado }) => {
    return (
        <header className="header">
            <div className="centralizer">
                <div className="col-3">
                    <Logo />
                </div>
                <div className="col-9 text-right">
                    <Menu navHorizontal={true} hideHome={true} estaLogado={estaLogado} mudarEstadoLogado={mudarEstadoLogado} />
                    <HamburguerMenu estaLogado={estaLogado} mudarEstadoLogado={mudarEstadoLogado} />
                </div>
            </div>
        </header>
    );
};

export default Header;