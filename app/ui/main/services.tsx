'use client';

import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
const OPTIONS: EmblaOptionsType = { containScroll: false, align: 'start' };
import 'aos/dist/aos.css';
import { MAIN_URL } from './const';
import { useEffect, useState } from 'react';

const MOCK_SERVICES = [
  {
    img: '/frame.png',
    title: 'IT consulting',
    description:
      'Our experts help companies choose and implement IT solutions to improve business processes, reduce costs, and enhance competitiveness. ',
    description2:
      'We ensure adaptation to changing technologies and market conditions by developing strategies for effective IT utilization.',
    info: [
      { message: 'Improvement of business processes' },
      { message: 'Cost reduction' },
    ],
  },
  {
    img: '/frame-2.png',
    title: 'Finance',
    description:
      'Our team helps optimize expenses, manage finances, and improve the efficiency of business processes. ',
    description2:
      'We develop strategies for risk management, tax optimization, and investments, as well as offer services to enhance management processes and crisis management.',
    info: [
      { message: 'Efficiency and cost optimization' },
      { message: 'Risk management and tax optimization' },
    ],
  },
  {
    img: '/33.png',
    title: 'Management',
    description:
      'Our team helps improve management processes in companies. We specialize in strategic planning, business process optimization, personnel development, financial consulting, and other aspects.',
    description2:
      'Our goal is to offer effective strategies for the development of your business.',
    info: [
      { message: 'Expert strategic planning' },
      { message: 'Comprehensive business management solutions' },
    ],
  },
  {
    img: '/44.png',
    title: 'Event organization',
    description:
      'We organize business and corporate events, including conferences, training sessions, and team-building activities, providing PR and logistical support. Our approach is based on partnership, individual attention, and innovation to create unique and unforgettable experiences, making attendees the center of everything we do.',
    description2: '',
    info: [
      { message: 'Unique experiences through individualized approach' },
      { message: 'Comprehensive logistical support' },
    ],
  },
  {
    img: '/55.png',
    title: 'Software development',
    description:
      'We provide full-cycle services for the development, implementation, and maintenance of IT solutions. ',
    description2: 'We develop functional websites, mobile applications, design user-friendly interfaces, and implement and automate complex business processes.',
    info: [
      { message: 'Full-cycle IT services' },
      { message: 'Expertise in business process automation' },
    ],
  },
];

export function Services() {
  const [services, setServices] = useState([]);
  const getPartners = async () => {
    await fetch(`${MAIN_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <section className="services" id="services" data-aos="fade-up">
      <div className="services__container">
        <header>
          <div className="label">
            <h2>Our Services</h2>
            <p>In our company, there are four main directions.</p>
          </div>
        </header>
        <EmblaCarousel options={OPTIONS} slides={services || MOCK_SERVICES} />
      </div>
    </section>
  );
}
