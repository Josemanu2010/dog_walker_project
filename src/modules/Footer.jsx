
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faMap, faMapPin } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer className="flex bg-blue-950 py-10 px-32">
        <div className="flex-1 grid justify-center text-white" id="contact">
            <h4 className="text-[25px] text-center">Contáctenos</h4>
            <ul>
                <li><span><FontAwesomeIcon className="pr-5 text-[20px] pt-2" icon={faPhone} /></span>3100000000</li>
                <li><span><FontAwesomeIcon className="pr-5 text-[20px] pt-2" icon={faPhone} /></span>3100000000</li>
                <li><span><FontAwesomeIcon className="pr-5 text-[20px] pt-2" icon={faMap} /></span>Bogotá D.C</li>
                <li><span><FontAwesomeIcon className="pr-5 text-[20px] pt-2" icon={faMapPin} /></span>Av siempre viva</li>
            </ul>
        </div>
        <div className="flex-1 grid justify-center text-white" id="sitemap">
            <h4 className="text-[25px] text-center">Sitemap</h4>
            <ul>
                <li className="pt-2">Inicio</li>
                <li>Buscar paseadores</li>
                <li>Sobre nosotros</li>
                <li>Contáctenos</li>
                <li>Política de privacidad</li>
                <li>Términos legales</li>
            </ul>
        </div>
        <div className="flex-1 grid justify-center text-white" id="map">
            <h4 className="text-[25px] text-center">Ubicación</h4>
            <div id="map">
                {/* mapa de google */}
                <div className="w-full mt-2">
                    <iframe width="100%" height="200" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Colombia,%20Bogot%C3%A1+(dog%20walker)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">fitness tracker</a></iframe>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer