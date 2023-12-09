import { useState, useEffect } from "react";

function generateLetter() {
  const letters =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomNum = Math.floor(Math.random() * letters.length);
  const randomLetter = letters[randomNum];

  return randomLetter;
}

const MatrixElement = ({ delay }: { delay: number }) => {
  const [letter, setLetter] = useState(generateLetter());

  useEffect(() => {
    const interval = setInterval(() => {
      const letter = generateLetter();

      setLetter(letter);
    }, Math.floor(Math.random() * 5000)+1000);

    return () => clearInterval(interval);
  }, [letter]);
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className=" flex justify-center items-center h-[20px] animate-matrixEffect font-semibold"
    >
      {letter}
    </div>
  );
};

export default MatrixElement;
