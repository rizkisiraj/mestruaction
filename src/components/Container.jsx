import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div className="mx-auto w-full min-h-screen max-w-sm bg-white relative">
      <Outlet />
    </div>
  )
}

export default Container;