import logo from '../assets/img/logo.svg';
import '../styles/components/logo.scss';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt='Test Task' />
        </div>
    )
}

export default Logo;