import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function TyperEfect({ frases, speed = 100, delay = 500, weight = "" }) {
  const [currentText, setCurrentText] = useState("");
  const [frasesIndex, setFrasesIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentFrase = frases[frasesIndex];
    let timeout;

    if (deleting && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed);
    } else if (deleting) {
      setDeleting(false);
      setFrasesIndex((prev) => (prev + 1) % frases.length);
    } else if (currentText.length < currentFrase.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => currentFrase.slice(0, prev.length + 1));
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, deleting, frasesIndex, frases, speed, delay]);

  return (
    <>
      <span className={`text-gray-900 font-mono tracking-wide ${weight}`}>
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
