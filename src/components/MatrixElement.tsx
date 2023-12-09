function generateLetter() {
  const letters =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomNum = Math.floor(Math.random() * letters.length);
  const randomLetter = letters[randomNum];

  return randomLetter;
}

const MatrixElement = ({ delay }:{delay:number}) => {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className=" flex justify-center items-center h-[20px] animate-matrixEffect font-semibold"
    >
      {generateLetter()}
    </div>
  );
};

export default MatrixElement;
