import { useState } from 'react';

import FacebookIcon from './icons/SvgFacebook';
import InstagramIcon from './icons/SvgInstagram';
import LinkedinIcon from './icons/SvgLinkedin';
import SearchIcon from './icons/SvgSearch';
import ChevronDownIcon from './icons/SvgChevronDown';

function Header() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleInput = () => {
    setMostrarInput(!mostrarInput);
  };
  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  return (
    <header className="bg-[#0BA3CD] text-white p-4 flex justify-between items-center">
      <div className="flex gap-2">
        <p>Riesgo de vida | 0810 - 666 - 1111</p>{' '}
        <ChevronDownIcon
          className="hover:bg-cyan-800 cursor-pointer rounded-md"
          onClick={toggleModal}
        />
        {mostrarModal && (
          <div className="fixed top-0 left-0 w-full z-10 h-full flex items-center justify-center bg-black bg-opacity-50">
            {/* Contenido del modal */}
            <div className="bg-white text-black p-4 rounded-xl">
              {/* Puedes agregar aquí el contenido específico de tu modal */}
              <div className="flex justify-end border-b-2">
                <button onClick={toggleModal} className="text-black">
                  X
                </button>
              </div>
              <div className="grid gap-2 my-2">
                <div>
                  <h3 className='text-lg font-medium text-[#006993]'>Riesgo de vida</h3>
                  <p>0810 666 1111</p>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-[#006993]'>Médico a domicilio:</h3>
                  <p> 0810 888 7788</p>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-[#006993]'>Atención a prestadores:</h3>
                  <p>0810 888 7788</p>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-[#006993]'>Atención a socios:</h3>
                  <p>
                    0810 888 7788{' '}
                    <p className='text-sm text-[#006993] w-2/3'>
                      {' '}
                      ( solo solicitudes o consultas medicas. Administrativas
                      solo whatsapp: 11.4872.9000 )
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {mostrarInput && (
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-md px-1 text-black"
          />
        )}
        <div onClick={toggleInput} className="flex gap-2">
          <SearchIcon className="cursor-pointer" />|
        </div>
        <div className="flex gap-2">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
