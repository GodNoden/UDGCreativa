import './SideTitle.css';

function SideTitle() {
    return (
        <div className='container'>
            <div className='contenido-hero'>
                <h2 className='subtitulo1'>Una nueva manera de vivir la recreación en la
                </h2>
                <p>Únete a UDG Creativa y conoce nuevas actividades para relajarte y divertirte junto a la comunidad de la
                    universitaria.</p>
                <section>
                    <form action="">
                        <input type="email" className="input1" placeholder="Introduce tu email..." />
                        <input className="button1" id="boton" type="submit" value="Unete a la comunidad!" />
                    </form>
                </section>
            </div>
            <img className="morada" src="calendario.svg" alt="" />
        </div>
    )
}

export default SideTitle;