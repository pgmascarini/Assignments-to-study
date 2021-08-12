import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="centralizer">
                <div className="col-3">
                    <Logo />
                </div>
                <div className="col-9 text-right">
                    <Menu navHorizontal={true} hideHome={true} />
                </div>
            </div>
        </header>
    );
};

export default Header;