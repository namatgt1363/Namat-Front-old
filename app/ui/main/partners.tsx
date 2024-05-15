'use client';

import Image from 'next/image';
import 'aos/dist/aos.css';
import { MAIN_URL } from './const';
import { useEffect, useState } from 'react';

const MOCK_PARTNERS = [
  { logo: '/company-logo.png' },
  { logo: '/icons/Dell.svg' },
  { logo: '/icons/Microsoft.svg' },
  { logo: '/icons/Asus.svg' },
  { logo: '/icons/ibm.svg' },
  { logo: '/icons/huawei.svg' },
  { logo: '/icons/samsung.svg' },
  { logo: '/icons/canon.svg' },
  { logo: '/icons/oracle.svg' },
  { logo: '/icons/eset.svg' },
  { logo: '/icons/lenovo.svg' },
  { logo: '/icons/epson.svg' },
];

interface Partner {
  photo: string;
}

interface PartnersComponentProps {
  partners: Partner[] | undefined;
}

export function Partners() {
  const [partners, setPartners] = useState([]);
  const [partnerGroups, setPartnerGroups] = useState<Partner[][]>([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (partners) {
      const groupedPartners: Partner[][] = [];
      for (let i = 0; i < partners.length; i += 12) {
        groupedPartners.push(partners.slice(i, i + 12));
      }
      setPartnerGroups(groupedPartners);
    }
  }, [partners]);

  useEffect(() => {
    if (partners.length > 12) {
      const timer = setInterval(() => {
        setShow(false); // Start fade out
        setTimeout(() => {
          setShow(true); // Start fade in after 2 seconds
          setCurrentGroupIndex(
            (prevIndex) => (prevIndex + 1) % partnerGroups.length,
          );
        }, 1000);
      }, 5000); // Switch partners every 4 seconds

      return () => clearInterval(timer);
    }
  }, [partnerGroups, partners]);


  const getPartners = async () => {
    await fetch(`${MAIN_URL}/partners`)
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <section className="partners" id="partners" data-aos="zoom-in-out">
      <header data-aos="fade-up" data-aos-duration="500">
        <h2>
          50+ <br /> partners
        </h2>
        <p>
          We specialize in innovative solutions, <br /> adapting them to the
          needs of each <br /> market.
        </p>
      </header>
      <ul className="partners__list">
        {partners
          ? partnerGroups.length > 0 &&
            partnerGroups[currentGroupIndex].map(({ photo }, index) => (
              // <div className='wr'>
              <li
                className="partners__item"
                data-aos="fade-up"
                key={index}
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                // style={{ opacity: show ? 1 : 0, transition: 'opacity 1s' }}
              >
                <Image
                  className="partner__img"
                  src={photo}
                  alt="logo"
                  width={101}
                  height={36}
                />
              </li>
              // </div>
            ))
          : MOCK_PARTNERS.map(({ logo }, index) => (
              <li
                className="partners__item"
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image src={logo} alt="logo" width={101} height={36} />
              </li>
            ))}
      </ul>
    </section>
  );
}
