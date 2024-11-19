
function Banner({ img, title, desc, top }) {
    const setBanner = {
      backgroundImage: `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `center ${top}`,
      backgroundSize: '100%'
    } 
  return (
    <>
    {/* Banner */}
    <section id="banner" className='flex relative justify-center place-content-center h-64' style={setBanner}>
        <div className="rgba absolute inline-grid w-full h-full justify-center place-content-center">
            <h1 className='text-7xl font-bold text-white uppercase justify-center place-content-center'>{title}</h1>
            <strong className='text-center text-[20px] text-white'>{desc}</strong>
        </div>
    </section>
    </>
  )
}

export default Banner