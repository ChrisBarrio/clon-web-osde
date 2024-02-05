//import React from 'react'
import PropTypes from 'prop-types';

BtnWithoutBg.propTypes = {
  name: PropTypes.string.isRequired, // Asegura que 'name' sea una cadena de texto y es obligatorio
  ruta: PropTypes.string.isRequired, // Asegura que 'ruta' sea una cadena de texto y es obligatorio
};

function BtnWithoutBg({ name, ruta }) {
  return (
    <a
      href={ruta}
      className="border-2 border-[#006993] rounded-xl p-2 text-[#006993]"
    >
      {name}
    </a>
  );
}

export default BtnWithoutBg;
