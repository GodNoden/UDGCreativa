import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="maria.jpg"
                    alt="María Pagés"
                />
                <h3>María Pagés De Scheherezade</h3>
                <p>Viernes 21 jul 2023 21:00 h y Sábado 22 jul 2023 20:00 h.</p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="opera.jpg"
                    alt="La Flauta Mágica"
                />
                <h3>La flauta mágica de Mozart</h3>
                <p>Sábado 03 de junio, 11:55 h</p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="orquesta.jpg"
                    alt="Orquesta Higinio Ruvalcaba"
                />
                <h3>Orquesta Higinio Ruvalcaba: Programa 4</h3>
                <p>Sábado 13 de mayo, 19:30 h</p>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;