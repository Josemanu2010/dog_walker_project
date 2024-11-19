
function FilterAside() {
  return (
    <>
        <h1 className="text-center">Filtrar paseadores</h1>
        <hr />
        <form action="" className="mt-5">
            <div className="form-group my-5">
                <label htmlFor="">Precio por hora</label>
                <select name="" id="" className="w-full border-[.1px] border-gray-400">
                    <option value="">0$ - 4.000$</option>
                    <option value="">4.000$ - 6.000$</option>
                    <option value="">6.000$ - 8.000$</option>
                    <option value="">8.000$ - 12.000$</option>
                </select>
            </div>
            <div className="form-group my-5">
                <label htmlFor="">Años de experiencia</label>
                <select name="" id="" className="w-full border-[.1px] border-gray-400">
                <option value="">Sin experiencia</option>
                    <option value="">0 - 6 meses</option>
                    <option value="">6 meses - 1 año</option>
                    <option value="">1 año - 18 meses</option>
                    <option value="">2 años o más</option>
                </select>
            </div>
            <div className="form-group my-5">
                <label htmlFor="">Nivel de estudios</label>
                <select name="" id="" className="w-full border-[.1px] border-gray-400">
                    <option value="">Bachiller</option>
                    <option value="">Técnicos</option>
                    <option value="">Tecnólogos</option>
                    <option value="">Profesionales</option>
                </select>
            </div>

            <div className="form-group my-5">
                <label htmlFor="">Mascotas por paseo</label>
                <select name="" id="" className="w-full border-[.1px] border-gray-400">
                    <option value="">1 mascota</option>
                    <option value="">1 - 3 mascotas</option>
                    <option value="">3 - 5 mascotas</option>
                    <option value="">de 5 - 10 mascotas</option>
                </select>
            </div>

            <div className="form-group my-5">
                <label htmlFor="">Tipo de paseo</label>
                <select name="" id="" className="w-full border-[.1px] border-gray-400">
                    <option value="">Aire libre, caminando</option>
                    <option value="">Paseo en vehículo</option>
                </select>
            </div>

            <div className="form-group my-5 grid justify-center">
                <input type="submit" name="submit" value="Filtrar" className="bg-green-700 py-2 px-10 justify-center text-white"/>
            </div>
            
        </form>
    </>
  )
}

export default FilterAside