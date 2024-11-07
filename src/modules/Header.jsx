import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt, faPhone, faPaw, faHome, faUserCircle, faLocationDot, faStreetView } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/app/CAN-MINEMOS.png'
import { Link } from 'react-router-dom'
import './styleModules.css'


function Header() {
  return (
    <header className='relative w-full z-10 bg-white'>
        <div className="hinfo flex w-full border-b-2">
            <div className="logo w-[10%] grid justify-center">
            <Link to="/"><img src={ logo } alt="Logo canminemos" className='w-24' /></Link>
            </div>
            <div className="animationrun w-[50%]">
                <img className='brightness-50 contrast-125 opacity-20' src="https://i.pinimg.com/originals/ca/63/06/ca6306b31bc56423fd716406deed3b3d.gif" alt="Can-minemos" />
            </div>
            <div className="contact w-[40%] place-content-center">
                <ul className='flex justify-end pr-10 gap-16 text-center'>
                    <li className='hover:text-blue-900'>
                        <p><FontAwesomeIcon className='text-2xl' icon={faPhone} /></p>
                        <span className='text-[14px]'>3190909876</span>
                    </li>
                    <li className='hover:text-blue-900'>
                    <p><FontAwesomeIcon className='text-2xl' icon={faLocationDot} /></p>
                        <span className='text-[14px]'>Bogotá D.C</span>
                    </li>
                    <li className='hover:text-blue-900'>
                    <p><FontAwesomeIcon className='text-2xl' icon={faStreetView} /></p>
                        <span className='text-[14px]'>Av siempre viva</span>
                    </li>
                </ul>
            </div>
        </div>
        <nav className='flex w-full gap-10 font-sans py-2 sticky top-0 left-0 bg-white shadow-2xl'>
            <ul className='flex w-[70%] justify-around'>
                <li>
                    <Link to="/"><FontAwesomeIcon className='text-blue-800 ' icon={faHome} /> Inicio</Link>
                </li>
                <li>
                    <Link to="/dwalker"><FontAwesomeIcon className='text-blue-800' icon={faPaw} /> Buscar paseadores</Link>
                </li>
                <li>
                    <Link to="/about"><FontAwesomeIcon className='text-blue-800' icon={faIdCardAlt} /> Sobre nosotros</Link>
                </li>
                <li>
                    <Link to="/contact"><FontAwesomeIcon className='text-blue-800' icon={faPhone} /> Contáctenos</Link>
                </li>
            </ul>
            <ul className='w-[30%] justify-end pr-10'>
                <li className='text-right'>
                    <Link to="/profile"><FontAwesomeIcon className='text-blue-800' icon={faUserCircle} />  Mi perfil</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header