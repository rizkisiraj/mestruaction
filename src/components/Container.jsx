import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div className="mx-auto w-full max-w-sm bg-white">
      <Outlet />
    </div>
  )
}

export default Container;