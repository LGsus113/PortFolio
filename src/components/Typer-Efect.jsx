import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function TyperEfect({ frases, speed = 100, delay = 500, weight = null }) {
  const [currentText, setCurrentText] = useState("");
  const [frasesIndex, setFrasesIndex] = useState(0);
  const [deleting, setDelñeting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const handleCursorBlink = setInterval(() => {
      setCursorVisible((prevState) => !prevState);
    }, 600);

    return () => clearInterval(handleCursorBlink);
  }, []);

  useEffect(() => {
    const text = frases[frasesIndex];
    let timeout;

    if (deleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed);
      } else {
        setDelñeting(false);
        setFrasesIndex((prevState) => (prevState + 1) % frases.length);
      }
    } else {
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setDelñeting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, deleting, frasesIndex, frases, speed, delay]);

  return (
    <>
      <span className={`text-gray-900 font-mono tracking-wide ${weight ? weight : ""}`}>
        {currentText}
      </span>
      <span
        className={`inline-block text-purple-800 ${
          cursorVisible ? "animation-blink" : ""
        }`}
      >
        _
      </span>
    </>
  );
}

TyperEfect.propTypes = {
  frases: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  delay: PropTypes.number,
  weight: PropTypes.string,
};

export default TyperEfect;
