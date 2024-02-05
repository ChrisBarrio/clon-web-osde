// import React from 'react'
import PhoneIcon from './icons/SvgPhone';
import HeartIcon from './icons/SvgHeart';
import WhatsappIcon from './icons/SvgWhatsapp';
import BuildingIcon from './icons/SvgBuilding';

const PhonesLinks = [
  {
    text: 'Canales de atención',
    ruta: '#',
    icon: <PhoneIcon />,
  },
  {
    text: 'Médico virtual',
    ruta: '#',
    icon: <HeartIcon />,
  },
  {
    text: 'Hacete socio',
    ruta: '#',
    icon: <WhatsappIcon />,
  },
  {
    text: 'Atención empresas',
    ruta: '#',
    icon: <BuildingIcon />,
  },
];

function SectionPhones() {
  return (
    <section className="bg-white my-6 flex justify-center">
      <div className="flex justify-around border-2 rounded-xl w-2/3">
        {PhonesLinks.map(({ text, ruta, icon }) => (
          <div className="flex items-center gap-2 py-4 " key={text}>
            {icon}
            <div>
              <p>{text}</p>
              <a href={ruta} className="text-[#006993] underline">
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionPhones;
