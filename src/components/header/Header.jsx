import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Yogeeta Bodade</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down" aria-label="Scroll down to contact section">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
