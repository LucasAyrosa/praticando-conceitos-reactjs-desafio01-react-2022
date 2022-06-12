import logo from '../assets/logo.svg';
import './Header.css';

export function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="logo" />
        </header>
    );
}