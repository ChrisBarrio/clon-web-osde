//import React from 'react'
import { Link } from 'react-router-dom';

import BtnWithoutBg from './BtnWithoutBg';
import BtnWithBg from './BtnWithBg';

import LogoEmpresa from '../assets/osde-logo.png'

// rutas de pàginas
const linksPage = [
  {
    name: 'Cartilla médica',
    ruta: '/cartillamedica',
  },
  {
    name: 'Empresas',
    ruta: '/empresas',
  },
  {
    name: 'Planes',
    ruta: '/planes',
  },
  {
    name: 'Novedades',
    ruta: '/novedades',
  },
];

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <a href="/" className='w-1/3 h-20 '>
        <img src={LogoEmpresa} alt="logo de empresa osde" className='object-cover h-24 w-64'/>
      </a>

      <nav className="flex gap-6">
        {linksPage.map(({ name, ruta }) => (
          <Link to={ruta} className=" text-gray-500 font-semibold" key={name}>
            {name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-2">
        <BtnWithoutBg name="¿Cómo ser prestador?" ruta="/comoserprestador" />
        <BtnWithoutBg name="Hacete socio" ruta="/cotizador" />
        <BtnWithBg name="Gestiones online" ruta="/gestionesonline" />
      </div>
    </div>
  );
}

export default Navbar;
