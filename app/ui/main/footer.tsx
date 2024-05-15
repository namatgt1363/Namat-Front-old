'use client';

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS.init();
export function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <a className="footer__logo">
        <Image src="/logo.svg" alt="Logo" width={161.44} height={42} />
      </a>
      <ul className="footer__navigation">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#partners">Partners</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="footer__navigation__item">
          <a href="#contact" style={{ display: 'flex' }}>
            <span>Get started</span>
            <Image src="/icons/right-arrow.svg" alt="" width={16} height={16} />
          </a>
        </li>
      </ul>
      <div className="footer__bottom">
        <p>© 2024 Namat Global Trade. All rights reserved</p>
        <div className="social-network">
          <a href="#">
            <Image src="/icons/Instagram.svg" alt="" height={24} width={24} />
          </a>
          <a href="#">
            <Image src="/icons/Twitter.svg" alt="" height={24} width={24} />
          </a>
          <a href="#">
            <Image src="/icons/Youtube.svg" alt="" height={24} width={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
