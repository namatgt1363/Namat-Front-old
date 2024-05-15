'use client';

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { MAIN_URL } from './const';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    await fetch(`${MAIN_URL}/send-message/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Clear input fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-block">
          <h2>Contact us</h2>
          <div className="contact__info">
            <address data-aos="fade-up" data-aos-duration="500">
              <div className="contact__email">
                <Image src="/icons/mail.svg" alt="" height={24} width={24} />
                <a href="mailto:MD@namatgt.com">MD@namatgt.com</a>
              </div>
              <div className="contact__phone">
                <Image src="/icons/phone.svg" alt="" height={24} width={24} />
                <a href="tel:+996772545556">+996 772 545 556</a>
              </div>
              <p>
                IFZA Property FZCO, Dubai Silicon Oasis, DDP, Building A1,
                Dubai, United Arab Emirates
              </p>
              <div className="social-network">
                <a href="#">
                  <Image
                    src="/icons/Instagram.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/icons/Twitter.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/icons/Youtube.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                </a>
              </div>
            </address>
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <label className="contact__label">
                <span>Your Name</span>
                <input
                  required
                  type="text"
                  className="contact__input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="contact__label">
                <span>Email</span>
                <input
                  required
                  type="email"
                  className="contact__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="contact__label">
                <span>Message</span>
                <textarea
                  required
                  className="contact__textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <button type="submit" className="contact__button">
                Send message
              </button>
            </form>
          </div>
          <Image
            className="bg-bottom"
            src="/background/block-bg-bottom.svg"
            alt=""
            height={65}
            width={299}
          />
          <Image
            className="bg-top"
            src="/background/block-bg-top.svg"
            alt=""
            height={104}
            width={448}
          />
        </div>
      </div>
    </section>
  );
}
