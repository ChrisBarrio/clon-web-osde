//import React from 'react'
import PropTypes from 'prop-types';

import UserIcon from './icons/SvgUser'

BtnWithBg.propTypes = {
  name: PropTypes.string.isRequired, // Asegura que 'name' sea una cadena de texto y es obligatorio
  ruta: PropTypes.string.isRequired, // Asegura que 'ruta' sea una cadena de texto y es obligatorio
};

function BtnWithBg({ name, ruta }) {
  return (
    <a
      href={ruta}
      className="border-2 border-[#006993] bg-[#006993] rounded-xl p-2 text-white flex gap-1"
    >
      {name} <UserIcon/>
    </a>
  );
}

export default BtnWithBg;
