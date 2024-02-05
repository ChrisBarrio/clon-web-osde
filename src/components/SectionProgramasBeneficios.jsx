import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import 'slick-carousel/slick/slick.css';

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      image: 'https://images.ctfassets.net/xp55tek00mj4/4AxJnNDTxS6qUC2aMQOfGK/2662c76a706d4605e3ac4a50c858782b/foto-emergencias-zonas-veraneo-23.jpg',
      title: 'Profesionales y centros médicos en zonas de veraneo',
      link: 'URL_ENLACE_1',
    },
    {
      id: 2,
      image: 'https://images.ctfassets.net/xp55tek00mj4/GBnhglRKq6Z3QhXlnBAmH/2be8c785a3d6633a7b65f2d1804ab55c/foto-carru-descuentos-azul.jpg',
      title: 'Club de descuentos y beneficios',
      link: 'URL_ENLACE_2',
    },
    { id: 3, image: 'https://images.ctfassets.net/xp55tek00mj4/3GjhTVsP4SXCFzUqHCg5yy/7ff7588eb8f142e6f909b60eb420cff0/foto-carru-acciones-prevencion-azul.jpg', title: 'Programas y acciones de prevención', link: 'URL_ENLACE_3' },
    { id: 4, image: 'https://images.ctfassets.net/xp55tek00mj4/4ZkQylTlJyrMVJD5kVZKAL/28ed2fe606ab740ecf3f10e78c18df79/foto-carru-enfremedades-cronicas-azul.jpg', title: 'Programa de Patologías Crónicas', link: 'URL_ENLACE_4' },
    { id: 5, image: 'https://www.miobrasocial.com.ar/wp-content/uploads/2017/01/plan-materno-infantil-recien-nacidos.jpg', title: 'Plan materno Infantil, ¿Cómo lo gestiono?', link: 'URL_ENLACE_5' },
    { id: 6, image: 'https://www.clinicbarcelona.org/media/cache/960_jpeg/uploads/media/default/0011/90/21cf15015d834e4af42475b1dd66d12474de70c9.jpeg', title: 'Diabetes Tipo I y II, ¿Cuáles son sus diferencias?', link: 'URL_ENLACE_6' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <section className="flex flex-col gap-4 my-4">
      <h2 className="text-center font-medium text-3xl text-[#006993]">
        Programas y Beneficios
      </h2>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} {...item}  />
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
