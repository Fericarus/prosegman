import React, { useState, useEffect, useCallback } from "react";
import { DotButton,PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndexTitle } from "../components/card";
import { mediaByIndexText } from "../components/card";
import styles from '../styles/Home.module.scss'
import SVGcircle from '../public/assets/images/noun-circle-2389709.svg'


const EmblaCarousel = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({
         skipSnaps: false,
         slidesToScroll: 3
        });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
      embla
    ]);
  
    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);
  
    useEffect(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
        <div className={styles.embla}>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <div className={styles.embla__viewport} ref={viewportRef}>
            <div className={styles.embla__container}>
            {slides.map((index) => (
                <a className={styles.embla__slide} key={index} href="#">
                <div className={styles.embla__slide__inner}>
                    <SVGcircle />
                    <h1>{mediaByIndexTitle(index)}</h1>
                    <p>{mediaByIndexText(index)}</p>
                </div>
                </a>
            ))}
            </div>
        </div>
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
        <div className={styles.embla__dots}>
            {scrollSnaps.map((_, index) => (
            <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
            />
            ))}
        </div>
    </>
  );
};

export default EmblaCarousel;
