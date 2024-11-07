import CardConfig from "./Cardconfig"

function CardInfo() {
  return (
    <section className="flex justify-around my-5">
        <CardConfig valor="Compromiso" desc="nos responsabilisamos con tu mascota" />
        <CardConfig valor="Puntualidad" desc="Lo entregamos a la hora establecida" />
        <CardConfig valor="Cuidado" desc="Mantenemos al pendiente de tu mascota en todo momento" />
        <CardConfig valor="Seguridad" desc="Controlamos las situaciones agresivas entre las mascotas" />
    </section>
  )
}

export default CardInfo