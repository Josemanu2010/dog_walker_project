import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_banner from '../../assets/app/dog_walker.webp'
import Banner from '../../components/Banner'
import RenderWalkers from '../../components/RenderWalkers'
import CardInfo from './CardInfo'
import dog from '../../assets/app/dog-section.jpg'
import dog_walker from '../../assets/app/perroamarillo.webp'
import { faClock, faDumbbell, faHandsBubbles, faPeopleArrows, faPersonCircleCheck, faSackDollar, faShoePrints } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Link } from 'react-router-dom'


function Home() {
    
  return (
    <>        
        <Banner img={img_banner} title="CAN-MINEMOS" desc="La plataforma de paseos caninos" top="-480px"/>
        
        <div className="content px-5">  
            <CardInfo />
            <section id='renderwalker' className='block'>
                <h3 className='text-[45px] font-bold text-center my-10 justify-center place-content-center px-60'>Nuestros paseadores son estrictamente verificados</h3>
                <section>
                    <RenderWalkers verlink={true} textlink="Conoce a todos los  paseadores"/>
                </section>
            </section>
        </div>

        <section id='info-home' className='my-10 flex bg-blue-900 w-full h-auto'>
            <picture className='w-[40%] grid justify-center'>
                {/* <source srcSet='' type='' media="(max-width: 640px)"/> */}
                <source srcSet={dog} type='image/webp'/>
                <img className='w-full h-auto' src={dog} alt="Perro-canminamos" />
            </picture>
            <aside className='w-[60%] grid justify-center place-content-center text-center px-16'>
                <h4 className='text-white text-7xl'>No tienes tiempo de pasear a tus mascotas</h4>
                <span className='text-white text-2xl leading-loose'>No te preocupes, nuestros paseadores lo harán por tí.</span>
                <p className='text-[#dced5e] text-[35px]'>Regístrate <span className='text-yellow-500 font-bold uppercase text-5xl'>gratis</span> para escoger a tu paseador favorito</p>
                <Link className='bg-yellow-500 py-3 px-10 my-5 text-black text-[20px] rounded-3xl hover:bg-yellow-400' to="/register">Regístrate gratis como cliente</Link>
            </aside>
        </section>


        <div id='paseadores' className="content px-5">
            <section>
            <h3 className='text-[45px] font-bold text-center my-10 justify-center place-content-center px-80'>¿Quieres convertirte en paseador?</h3>
                <div className="container flex">
                    <article className='flex-1 grid place-content-center'>
                        <h5 className='text-3xl my-5 text-center'>Beneficios de ser un paseador</h5>
                        <ul className='text-2xl'>
                            <li className=''>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faDumbbell} /> Ejercicio constante
                                </span>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faShoePrints} /> Trabajar al aire libre
                                </span></li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faClock} /> Flexibilidad horaria
                                </span></li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faSackDollar} /> Ingresos adicionales
                                </span></li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faPeopleArrows} /> Desarrollo de habilidades sociales
                                </span></li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faHandsBubbles} /> Disminución del estrés
                                </span></li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className="text-gray-800 text-[15px]" icon={faPersonCircleCheck} /> Trabajas de manera independiente
                                </span></li>
                        </ul>
                        <Link className='bg-yellow-500 py-3 px-10 my-5 text-black text-[20px] rounded-3xl hover:bg-yellow-400' to="/register">Regístrate gratis como paseador</Link>
                    </article>
                    <section className='flex-1 grid place-content-center'>
                        <picture>
                            <source srcSet='' type='image/png'/>
                            <img src={dog_walker} alt="Conviértete en paseador" />
                        </picture>
                    </section>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default Home

