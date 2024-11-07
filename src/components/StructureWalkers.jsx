import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './components.css'
import { Link } from 'react-router-dom'

function StructureWalkers({img, name, prof, hobby, pxh, local, link}) {
    // const {img, name, prof, hobby, pxh, local} = info
  return (
    <div id='card' className='shadow-md border-2 rounded-[30px] py-6 grid place-content-center w-[20%] px-5 hover:shadow-zinc-400'>
        <img src={img} alt="" className='w-full h-40 rounded-[30px]' />
        <h4 className='text-center py-4 text-2xl'>
            {name} <FontAwesomeIcon className='text-[#e07937] text-sm align-middle' icon={faCircleCheck} />
        </h4>
        <span className='text-[15px]'>
            <strong className='font-semibold text-[15px] text-gray-600'>Profesión: </strong>
            {prof}
        </span>
        <span className='text-[15px]'>
            <strong className='font-semibold text-[15px] text-gray-600'>Tiempo libre: </strong>
            {hobby}
        </span>
        <span className='text-[15px]'>
            <strong className='font-semibold text-[15px] text-gray-600'>Paseo por hora: </strong> 
            {pxh}
        </span>
        <span className='text-[15px]'>
            <strong className='font-semibold text-[15px] text-gray-600'>Localidad: </strong> 
            {local}
        </span>
        <Link to={link} className='bg-blue-950 text-white text-center py-2 rounded-2xl mt-2 hover:bg-[#e07937]'>
            <FontAwesomeIcon icon={faArrowCircleRight} /> Ver perfil
        </Link>
    </div>
  )
}

export default StructureWalkers