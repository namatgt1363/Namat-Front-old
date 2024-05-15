'use client';

import Image from 'next/image';
import 'aos/dist/aos.css';

export function TradePartners() {
  return (
    <section className="trade-partners" id="about">
      <header>
        <h2 data-aos="fade-up" data-aos-duration="400">
          NAMAT Global Trade
        </h2>
        <p data-aos="fade-up" data-aos-duration="600">
          collaborate with leading manufacturers to provide our clients with the
          best innovative solutions that contribute to expanding their
          businesses
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="simple-blue-block"
        />
        <Image
          className="pattern"
          src="/background/pattern.svg"
          alt=""
          width={400}
          height={400}
          data-aos="fade-up"
          data-aos-duration="400"
        />
        <Image
          className="about-us"
          src="/background/about-us.svg"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
          width={1085}
          height={157}
        />
        <div className="mobile-about-us">
          <Image
            className="about-us-mobile"
            src="/background/about-us.svg"
            alt=""
            width={357}
            height={101}
          />
        </div>
      </header>
      <ul className="trade-partners__list">
        <li
          className="trade-partners__item"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <span>01</span>
          <p>
            We prioritize close collaboration with our suppliers. We become
            their trusted representatives, advisors, ready to solve any problems
            together or utilize new technologies and opportunities.
          </p>
        </li>
        <li
          className="trade-partners__item"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <span>02</span>
          <p>
            We combine expert technical and market knowledge with a progressive
            partner support program. By closely collaborating with our dealers,
            we aim to ensure their dynamic growth and development, achieving
            results together.
          </p>
        </li>
        <li
          className="trade-partners__item"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span>03</span>
          <p>
            Working on projects worldwide, we tailor solutions to the specifics
            of each market.
          </p>
        </li>
      </ul>
    </section>
  );
}
