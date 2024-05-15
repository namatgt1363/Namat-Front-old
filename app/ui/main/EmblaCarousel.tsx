import React, { useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS.init();

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  //   const customAlignment = ( snapSize, index) => {
  //     // Calculate the desired transform based on the index
  //     const transform = index * snapSize;
  //     return transform; // Negate the transform to reverse the direction if necessary
  //   };
  //   const [emblaRef] = useEmblaCarousel({ align: customAlignment });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla" data-aos="fade-up">
      <div
        className="arrows"
      >
        <PrevButton
          className="arrows-left"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className="arrows-right"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* <ul className="services__list"> */}
          {slides.map((slide, index) => (
            <div
              className="services__item"
              key={index}
              data-aos="fade-up" data-aos-duration="600"
            >
              <Image
                src={slide.photo}
                alt="photo"
                className="img-slide"
                height={420}
                width={307}
              />
              <div className="service">
                <h3 className="service__title">{slide.name}</h3>
                <p className="service__description">{slide.first_description}</p>
                <p className="service__description2">
                  {!!slide.second_description && slide.second_description}
                </p>
                <ul className="service__details">
                  {/* {slide.info.map(
                    ({ message }: { message: string }, index: number) => ( */}
                      <li key={index} className="service__detail">
                        <Image
                          src="/icons/check.svg"
                          alt=""
                          height={26}
                          width={18}
                        />
                        <span>{slide.first_advantage}</span>
                      </li>
                      <li key={index} className="service__detail">
                        <Image
                          src="/icons/check.svg"
                          alt=""
                          height={26}
                          width={18}
                        />
                        <span>{slide.second_advantage}</span>
                      </li>
                    {/* ),
                  )} */}
                </ul>
              </div>
            </div>
          ))}
          {/* </ul> */}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            >
              <span></span>
            </DotButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
