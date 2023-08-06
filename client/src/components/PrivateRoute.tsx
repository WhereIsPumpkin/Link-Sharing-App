import { Outlet, Navigate } from 'react-router-dom';
import useUserStore from '../store/user';

const PrivateRoute = () => {
  const store = useUserStore.getState();

  return store.email ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
