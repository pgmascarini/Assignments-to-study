import Menu from "../menu/Menu";

const Header = () => {
    return (
        <header>
            <Menu navHorizontal={true} hideHome={true} />

        </header>
    );
}

export default Header;