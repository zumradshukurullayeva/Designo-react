// import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
              <div className="nav-logo">
                <img src="/images/Oval (11).svg" alt=""/>
                <img src="/images/DESIGNO (2).svg" alt="" className="logo"/>
              </div>
              <div className="nav-link">
                <a href="/" className="nav-item">OUR COMPANY</a>
                <a href="/" className="nav-item">LOCATIONS</a>
                <a href="/" className="nav-item">CONTACT</a>
              </div>
            </nav>
        </header>
    );
}