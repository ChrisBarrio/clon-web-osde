// import React from 'react'

const listaEmpresas = [
  {
    name: 'Binaria seguros',
    ruta: 'https://www.binariavida.com.ar/',
    img: 'https://www.aseguradosaldia.com/wp-content/uploads/binaria-retiro-800x600.png',
  },
  {
    name: 'Fundación Osde',
    ruta: 'https://www.fundacionosde.com.ar/',
    img: 'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/2715/201603161228469a96a2c73c0d477ff2a6da3bf538f4f4.jpg',
  },
  {
    name: 'Interturis',
    ruta: 'https://www.interturis.com.ar/',
    img: 'https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/pictures/picture-1099531-1504810332.png',
  },
];

function SectionEmpresasOsde() {
  return (
    <section className="my-4 flex flex-col gap-4">
      <h2 className="text-center font-medium text-3xl text-[#006993]">
        Empresas del grupo Osde
      </h2>
      <div className="flex justify-center gap-2 w-2/3  mx-auto ">
        {listaEmpresas.map(({ name, ruta, img }) => (
          <div key={name} className="w-1/3  text-center p-2">
            <a
              href={ruta}
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-medium text-gray-500  p-2"
            >
              {name}
              <img
                className="w-50 h-40 my-2 mx-auto cursor-pointer"
                src={img}
                alt={`logo de ${name}`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionEmpresasOsde;
