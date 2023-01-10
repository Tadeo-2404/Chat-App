import { Outlet } from 'react-router-dom';
const TemplateLayout = () => {
  return (
    <div>
        <h1>Chat app</h1>
        <Outlet />
    </div>
  )
}

export default TemplateLayout