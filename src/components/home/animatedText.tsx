// "use client";

// import { useEffect, useState } from "react";

// export default function AnimatedText() {
//   const texts = ["Software Developer.", "Professional Coder."];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         setIsVisible(true);
//       }, 1000); // Adjust duration as needed
//     }, 4000); // Adjust duration as needed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <span
//         className={`after:contents-[''] after:absolute after:top-[50%] after:right-0 after:w-[2px] after:h-4/5 after:bg-red_primary after:-translate-y-1/2 inline-flex overflow-hidden ${
//           isVisible ? "animate-grow" : "animate-shrink"
//         }`}
//       >
//         {texts[currentIndex]}
//       </span>
//       <span className="w-[2px] h-4/5 bg-red_primary" />
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function AnimatedText() {
  const texts = ["Software Developer.", "Professional Coder."];
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const delayBetweenTexts = 1000;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    };

    const timeoutId = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <>
      {displayedText}
      <span className="border-r-2 border-red_primary h-3/4" />
    </>
  );
}
