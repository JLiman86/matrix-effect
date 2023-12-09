import { useEffect, useRef, useState } from "react";
import music from "./assets/Rob Dougan - Clubbed To Death (Matrix Soundtrack).mp3";
import MatrixColumn from "./components/MatrixColumn";

const audio = new Audio(music);

const initialCalculation = () => {
  const colCount = Math.floor(window.innerWidth / 20);
  const rowCount = Math.floor(window.innerHeight / 20);

  return [colCount, rowCount];
};

function App() {
  const isMelodyOn = useRef(false);

  const [sizeValues, setSizeValues] = useState(initialCalculation());

  useEffect(() => {
    const resizeFunction = () => {
      const colCount = Math.floor(window.innerWidth / 20);
      const rowCount = Math.floor(window.innerHeight / 20);

      setSizeValues([colCount, rowCount]);
    };

    window.addEventListener("resize", resizeFunction);
  }, []);

  useEffect(() => {
    const play = () => {
      isMelodyOn.current = !isMelodyOn.current;
      if (isMelodyOn.current) {
        audio.play();
      } else {
        audio.pause();
      }
    };
    document.addEventListener("click", play);

    return () => {
      document.removeEventListener("click", play);
    };
  }, []);


  return (
    <section className={`h-screen flex bg-black justify-between overflow-hidden`}>
      {new Array(sizeValues[0]).fill(0).map((_column, idx) => {
        return <MatrixColumn key={idx} colCount={sizeValues[1]} />;
      })}
    </section>
  );
}

export default App;
