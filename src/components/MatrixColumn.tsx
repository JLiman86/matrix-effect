import MatrixElement from "./MatrixElement";

const MatrixColumn = ({ rowCount }: { rowCount: number }) => {
  let delay = Math.random() * 20;
  return (
    <div className="flex flex-col w-[20px]">
      {new Array(rowCount).fill(0).map((_element, idx) => {
        delay += 0.1;
        return <MatrixElement key={idx} delay={delay} />;
      })}
    </div>
  );
};

export default MatrixColumn;
