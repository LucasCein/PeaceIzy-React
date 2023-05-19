import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTiktok,
    faFacebook,
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
const Footer = () => {
    return (
        <footer className=''>
            <div className="footer-icons">
                <a href="https://www.instagram.com/peaceicyar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className="contact-section">
                <h3>Contacto</h3>
                <p>Horario: Lunes a Viernes, de 9am a 5pm</p>
                <p>Teléfono: 123-456-7890</p>
                <p>Email: contacto@peaceizy.com</p>
            </div>
        </footer>
    );
};

export default Footer;
