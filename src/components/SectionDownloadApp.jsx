// import React from 'react'

import DoctorIcon from './icons/SvgDoctor';
import CardIcon from './icons/SvgCard';
import CartillaIcon from './icons/SvgCartilla';
import AutorizacionesIcon from './icons/SvgAutorizaciones';
import ReintegrosIcon from './icons/SvgReintegros';

import ImgDownloadIos from '../assets/ios-download.png';
import ImgDownloadAndroid from '../assets/android-download.png';

const listaApp = [
  { name: 'Atencion médica virtual', icon: <DoctorIcon /> },
  { name: 'Smart Card', icon: <CardIcon /> },
  { name: 'Cartilla médica', icon: <CartillaIcon /> },
  { name: 'Solicitud de autorizaciones', icon: <AutorizacionesIcon /> },
  { name: 'Reintegros', icon: <ReintegrosIcon /> },
];

function SectionDownloadApp() {
  return (
    <section className="bg-[#006993] bg-opacity-50 flex justify-center py-4">
        {/* Left */}
      <figure className="w-1/2 flex justify-end">
        <img
          className="w-2/3"
          src="https://7694067.fs1.hubspotusercontent-na1.net/hub/7694067/hubfs/Landings/APP_OSDE_ADS/Header_celulares_Abril_2023.webp?width=700&height=681&name=Header_celulares_Abril_2023.webp"
          alt="imagen de la app de osde"
        />
      </figure>
      {/* Right */}
      <div className="w-1/2 flex flex-col gap-2 justify-evenly">
        <div className="text-[#095A7A]">
          <h2 className="text-3xl font-semibold">Descarga nuestra APP</h2>{' '}
          <p className="text-lg font-medium">Todo mas simple</p>
        </div>
        <div className="flex flex-col gap-2">
          {listaApp.map(({ name, icon }) => (
            <div className="flex items-center gap-2" key={name}>
              <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                {icon}
              </span>
              <p className="font-semibold text-gray-600">{name}</p>
            </div>
          ))}
        </div>
        {/* enlaces de descarga ios & android */}
        <div className="flex items-center gap-4">
          <a
            href="https://apps.apple.com/us/app/osde/id1470295613"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-32"
              src={ImgDownloadIos}
              alt="icono descarga de app osde en apple store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=ar.com.osde.ads&hl=en_US"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-32"
              src={ImgDownloadAndroid}
              alt="icono descarga de app osde en playstore android"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionDownloadApp;
