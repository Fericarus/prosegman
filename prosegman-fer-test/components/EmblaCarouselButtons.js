import React from "react";
import styles from '../styles/Home.module.scss'

export const DotButton = ({ selected, onClick }) => (
  <button 
    className={`${styles.embla__dot} ${selected ? styles.is_selected : {} }`} 
    type="button" 
    onClick={onClick}>
  </button>
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={styles.embla__button__prev}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="45" viewBox="0 0 27 45">
      <path id="arrow" d="M-900.5,991.584-913.479,976l12.979-15.584-8.289-6.916L-927.5,976l18.711,22.5Z" transform="translate(927.5 -953.5)" fill="#e21d25"/>
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={styles.embla__button__next}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="45" viewBox="0 0 27 45">
      <path id="arrow" d="M-900.5,991.584-913.479,976l12.979-15.584-8.289-6.916L-927.5,976l18.711,22.5Z" transform="translate(-900.5 998.5) rotate(180)" fill="#e21d25"/>
    </svg>
  </button>
);


