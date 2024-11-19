import Banner from "../../components/Banner"
import dogPlayng from '../../assets/app/dog-playng.jpg'
import RenderWalkers from '../../components/RenderWalkers'
import FilterAside from "../../components/FilterAside"

function Dwalker() {
  return (
    <>
      <Banner img={dogPlayng} title="" desc="Encuentra a tu paseador favorito" top="" />
      <div className="container m-[auto] my-10 flex gap-10">
        <aside id="filters" className="w-[20%] h-auto border-[.5px] border-gray-300 shadow p-5">
          <FilterAside />
        </aside>
        <section id="walkers" className="w-[80%] border-[.5px] border-gray-300 shadow">
          <RenderWalkers verlink={false}/>
          <RenderWalkers verlink={true} textlink="Cargar más"/>
        </section>
      </div>
    </>
  )
}

export default Dwalker