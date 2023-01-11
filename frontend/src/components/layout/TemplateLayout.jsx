import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
const TemplateLayout = () => {
  return (
    <div>
      <NavBar/>
      <div className='h-screen flex flex-col justify-center items-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default TemplateLayout