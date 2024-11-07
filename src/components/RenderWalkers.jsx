import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StructureWalkers from "./StructureWalkers"
import sofia from '../assets/paseadores/Sofia.jpg'
import nicolas from '../assets/paseadores/Nicolas.jpg'
import camilo from '../assets/paseadores/Camilo.jpg'
import carmen from '../assets/paseadores/Carmen.jpg'
import erick from '../assets/paseadores/Erick.jpg'
import estefa from '../assets/paseadores/Estefa.jpg'
import jhon from '../assets/paseadores/Jhon.jpg'
import gabriel from '../assets/paseadores/Gabriel.jpg'
import { Link } from "react-router-dom"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"


function RenderWalkers() {
    // const data = {
    //     img: sofia,
    //     name: 'José',
    //     // age: '31',
    //     // certified: 'Curso en veterinaria',
    //     prof: 'Abogado',
    //     hobby: 'Paseador',
    //     pxh: '7.500',
    //     local: 'Engativá'
    // }
  return (
        <section className="flex gap-8 justify-center flex-wrap">
            <StructureWalkers 
                img={sofia}
                name="Sofia"
                prof="Abogada"
                hobby="Paseador"
                pxh="7.500$"
                local="Chapinero"
                link="/profile" />

            <StructureWalkers 
                img={erick}
                name="Nicolas"
                prof="Mensajero"
                hobby="Paseador"
                pxh="5.500$"
                local="Suba"
                link="/profile" />

            <StructureWalkers 
                img={camilo}
                name="Camilo"
                prof="Tecnólogo"
                hobby="Paseador"
                pxh="8.500$"
                local="Engativá"
                link="/profile" />

            <StructureWalkers 
                img={carmen}
                name="Carmen"
                prof="Señora del hogar"
                hobby="Paseador"
                pxh="6.000$"
                local="Chapinero"
                link="/profile" />

            <StructureWalkers 
                img={erick}
                name="Erick"
                prof="Mecánico"
                hobby="Paseador"
                pxh="6.000$"
                local="Chapinero"
                link="/profile" />

            <StructureWalkers 
                img={gabriel}
                name="Gabriel"
                prof="Estudiante"
                hobby="Paseador"
                pxh="6.000$"
                local="Usme"
                link="/profile" />

            <StructureWalkers 
                img={jhon}
                name="Jhon Perez"
                prof="Conductor"
                hobby="Paseador"
                pxh="6.400$"
                local="Fontibon"
                link="/profile" />

            <StructureWalkers 
                img={estefa}
                name="Carmen"
                prof="Aseadora"
                hobby="Paseador"
                pxh="6.000$"
                local="Tunjuelito"
                link="/profile" />

            <Link to="/dwalker" className="border-[1px] border-[#e07937] text-[#e07937] py-2 px-10 rounded-[30px] hover:text-white font-semibold hover:bg-[#e07937] hover:border-black"><FontAwesomeIcon icon={faArrowCircleRight} /> Conoce a todos los  paseadores</Link>

        </section>
  )
}

export default RenderWalkers