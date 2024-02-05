import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
  return (
    <div className="h-screen">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};
export default LayoutPublic;
