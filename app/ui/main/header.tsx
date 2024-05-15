'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import MyButton from '../shared/MyButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MAIN_URL } from './const';

const MOCK = [
  { title: '$10 Billion', description: 'Saved for our clients globally' },
  {
    title: '18-23%',
    description: 'The average client savings when working with us',
  },
  {
    title: '50-200%',
    description: 'Typical client EBITDA from strategic sourcing projects',
  },
];

export function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [statistic, setStatistic] = useState([]);
  const getPartners = async () => {
    await fetch(`${MAIN_URL}/side-bars`)
      .then((res) => res.json())
      .then((data) => {
        setStatistic(data);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);

  let [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const body = document.body;
      const scrollY = window.scrollY;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
    } else {
      const body = document.body;
      body.style.overflow = 'auto';
      body.style.position = '';
      const scrollY = parseInt(body.style.top || '0') * -1;
      body.style.top = '';
      window.scrollTo(0, scrollY);
    }
  }, [isMenuOpen]);

  return (
    <section className="header-wrapper">
      <div className="header-wrapper__section">
        <div className="container">
          <header
            className="header"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <a className="header__logo">
              <Image src="/logo.svg" alt="Logo" width={161.44} height={42} />
            </a>
            <nav className="navigation">
              <ul className="navigation__list">
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
                <li className="navigation__item">
                  <a href="#contact" style={{ display: 'flex', gap: "15px" }}>
                    <span>Get started</span>
                    <Image
                      src="/icons/right-arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
              </ul>
            </nav>
            {!isMenuOpen && (
              <a className="burger">
                <MyButton click={showMenu} />
              </a>
            )}
            {isMenuOpen && (
              <nav className="navigation-mobile">
                <button
                  className="close-mobile__icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src="/icons/close.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                </button>
                <ul className="navigation-mobile__list">
                  <li>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#partners" onClick={() => setIsMenuOpen(false)}>
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </a>
                  </li>
                  <li className="navigation-mobile__item">
                    <a href="#contact" style={{ display: 'flex' }}>
                      <span>Get started</span>
                      <Image
                        src="/icons/right-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </header>
        </div>

        <section
          className="intro"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="800"
        >
          <div className="intro__description">
            <h1>
              Global distributor
              <br />
              of leading global IT
              <br />
              manufacturers
            </h1>
            <p>
              In our portfolio, we have over 50+ major global IT hardware and
              software manufacturers.
            </p>
            <button className="intro__button">
              <a href="#about" style={{ display: 'flex', gap: "15px" }}>
                <span>More about us</span>
                <Image
                  src="/icons/bottom-arrow.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </button>
          </div>
        </section>

        {/* <Image
          className="header-img"
          src="/icons/male.svg"
          alt="ask"
          width={237}
          height={383}
        /> */}
        <Image
          className="header-img"
          src="/background/img-minnew.png"
          alt="ask"
          width={863}
          height={534}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
        />

        <Image
          className="header-img-mobile"
          src="/background/img-min.png"
          alt="ask"
          width={383}
          height={237}
        />
        <Image
          className="dots"
          src="/background/dots.svg"
          alt=""
          width={84}
          height={85}
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
        />
        <Image
          className="dotsm"
          src="/background/dotsm.svg"
          alt=""
          width={84}
          height={85}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        />
        <section
          className="statistics"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          {statistic && statistic.length >= 4 ? (
            <ul className="statistics__lists custom">
              {statistic.map(({ procent, description }, index) => (
                <li key={index} className="statistics__items">
                  <h2 className="statistics__title">{procent}</h2>
                  <p className="statistics__description">{description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="statistics__list">
              {statistic.map(({ procent, description }, index) => (
                <li key={index} className="statistics__item">
                  <h2 className="statistics__title">{procent}</h2>
                  <p className="statistics__description">{description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </section>
  );
}
