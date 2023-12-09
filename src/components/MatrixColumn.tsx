import MatrixElement from "./MatrixElement"


const MatrixColumn = ({colCount}:{colCount:number}) => {

  let delay = Math.random() * 40;
  return (
    <div className="flex flex-col w-[20px]">{
      new Array(colCount).fill(0).map((_element,idx)=>{

        delay += 0.05
        return <MatrixElement key={idx} delay = {delay}/>
      })
    }</div>
  )
}

export default MatrixColumn