import axios from 'axios';
import { Outlet } from 'react-router-dom';

function App() {
  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.withCredentials = true;

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
