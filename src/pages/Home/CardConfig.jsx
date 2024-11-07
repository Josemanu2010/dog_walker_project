
function CardConfig({valor, desc}) {
  return (
    <div className="cards w-[23%] bg-blue-800 text-white p-10 grid justify-center place-content-center text-center font-bold">
      <h3 className="text-[30px]">{valor}</h3>
      <strong className="text-[15px] font-normal">{desc}</strong>
    </div>
  )
}

export default CardConfig