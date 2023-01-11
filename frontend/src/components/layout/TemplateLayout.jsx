import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import NavBarAuth from '../NavBarAuth';
const TemplateLayout = () => {
  const [auth, setAuth] = useState(true);
  return (
    <div>
      {!auth ? <NavBar /> : <NavBarAuth/>}
      <div className='h-screen flex flex-col justify-center items-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default TemplateLayout