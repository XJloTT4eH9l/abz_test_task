import spinner from '../assets/img/spinner.svg';
import '../styles/components/preloader.scss';

const Preloader = () => {
    return (
        <img className="preloader" src={spinner} alt='loading...' />
    )
}

export default Preloader;