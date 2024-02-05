import FullScreenCarousel from '../components/FullScreenCarousel';
import SectionPhones from '../components/SectionPhones';
import SectionDownloadApp from '../components/SectionDownloadApp';
import SectionEmpresasOsde from '../components/SectionEmpresasOsde';
import SectionProgramasBeneficios from '../components/SectionProgramasBeneficios';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <FullScreenCarousel />
      <SectionPhones />
      <SectionDownloadApp />
      <SectionEmpresasOsde/>
      <SectionProgramasBeneficios/>
      <Footer/>
    </div>
  );
}

export default Home;
