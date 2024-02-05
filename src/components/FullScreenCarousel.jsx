import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
import '../FullScreenCarousel.css'; // Añade estilos personalizados si es necesario

const FullScreenCarousel = () => {
  const items = [
    {
      id: 1,
      image:
        'https://www.esan.edu.pe/images/blog/2019/10/15/1500x844-telemedicina.jpg',
      title: 'Videoconsulta ya está disponible',
      description:
        'Descubre la comodidad y accesibilidad de la atención médica desde la comodidad de tu hogar con nuestra nueva opción de Videoconsulta Médica. Conéctate virtualmente con profesionales de la salud, recibe asesoramiento y diagnóstico sin salir de casa. Tu bienestar está a solo un clic de distancia',
      link: '#',
    },
    {
      id: 2,
      image: 'https://www.lujan.gob.ar/sites/default/files/styles/imagen_destacada/public/web_1_258.png?itok=ZXk7trlk',
      title: 'Dengue: todo lo que necesitás saber',
      description: 'Encontrá las respuestas a las preguntas más frecuentes sobre esta enfermedad, cómo prevenirla y toda la información que buscás sobre la vacuna. 💉',
      link: '#',
    },
    {
      id: 3,
      image: 'https://chequeado.com/wp-content/uploads/2017/01/6819295033_9170fa8447_z-e1484574072543.jpg',
      title: 'Picadura de aguas vivas: 6 recomendaciones para minimizar el dolor',
      description: 'Conversamos con la Dra. María José Pelli (M.N. 74.095) sobre las picaduras de aguas vivas y nos compartió sus recomendaciones para saber cómo actuar.',
      link: '#',
    },
    // ... Agrega más elementos según sea necesario
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <div
            className="fullscreen-image bg-black opacity-80 "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="overlay w-1/2 bg-white backdrop-opacity-10 backdrop-invert bg-white/50">
              <h2 className="text-4xl font-bold mb-2 text-[#2c3133]">
                {item.title}
              </h2>
              <p className="text-black font-medium">{item.description}</p>
              <a
                href={item.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FullScreenCarousel;
