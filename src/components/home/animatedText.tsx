"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedText() {
  const texts = ["Software Developer.", "Professional Coder."];
  const typeSpeed = 50;
  const deleteSpeed = 50;
  const delayBetweenTexts = 250;

  const [displayedText, setDisplayedText] = useState("");
  const textIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    const animateTyping = () => {
      const currentText = texts[textIndexRef.current];
      const isDeleting = isDeletingRef.current;
      const charIndex = charIndexRef.current;

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          charIndexRef.current -= 1;
        } else {
          isDeletingRef.current = false;
          textIndexRef.current = (textIndexRef.current + 1) % texts.length;
          charIndexRef.current = 0;
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          charIndexRef.current += 1;
        } else {
          setTimeout(() => {
            isDeletingRef.current = true;
          }, delayBetweenTexts);
        }
      }
    };

    const intervalId = setInterval(
      animateTyping,
      isDeletingRef.current ? deleteSpeed : typeSpeed,
    );

    return () => clearInterval(intervalId);
  }, [displayedText]);

  return (
    <>
      {displayedText}
      <span className="border-r-2 border-red_primary h-3/4" />
    </>
  );
}
