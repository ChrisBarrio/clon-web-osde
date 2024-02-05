import LogoEmpresa from '../assets/osde-logo.png'


// Constantes para los enlaces de la primera columna
const sobreOSDELinks = [
  { label: 'Conocé OSDE', url: '#' },
  { label: 'Formularios de afiliación', url: '#' },
  { label: 'Términos y condiciones de afiliación digital', url: '#' },
  { label: 'Quiero trabajar en OSDE', url: '#' },
  { label: 'Binaria Seguros', url: '#' },
  { label: 'Interturis', url: '#' },
  { label: 'URG Urgencias', url: '#' },
  { label: 'Fundación OSDE', url: '#' },
];

// Constantes para los enlaces de la segunda columna
const empresasPrestadoresLinks = [
  { label: 'Autogestión de empresas', url: '#' },
  { label: 'Quiero ser prestador de OSDE', url: '#' },
  { label: 'Extranet de prestadores', url: '#' },
  { label: 'Extranet de proveedores', url: '#' },
];

// Constantes para los enlaces de la tercera columna
const informacionAdicionalLinks = [
  { label: 'Acuerdo con el usuario', url: '#' },
  { label: 'Política de privacidad', url: '#' },
  { label: 'Defensa del consumidor', url: '#' },
  { label: 'Libro de quejas online', url: '#' },
  { label: 'Baja de servicio', url: '#' },
  { label: 'Información para socios', url: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Columna 1: Logo de OSDE */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <img
            src={LogoEmpresa}
            alt="Logo de OSDE"
            className="w-16 md:w-24 lg:w-44 h-auto"
          />
        </div>

        {/* Columna 2: Sobre OSDE y Links */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <p className="text-lg font-bold mb-4">Sobre OSDE</p>
          <ul>
            {sobreOSDELinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Empresas/Prestadores con 6 links */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <p className="text-lg font-bold mb-4">Empresas/Prestadores</p>
          <ul>
            {empresasPrestadoresLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4: Información adicional con 3 links */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold mb-4">Información Adicional</p>
          <ul>
            {informacionAdicionalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
