import Logo from "./Logo";
import UIButton from "./UI/UIButton";
import '../styles/components/header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <UIButton title='Users' type='link' href='#users' />
                            </li>
                            <li className="nav__item">
                                <UIButton title='Sign up' type='link' href='#signUp' />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;