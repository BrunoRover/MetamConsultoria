import AppRoutes from './routes/AppRoutes';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return  (
    <>
    <ToastContainer />  
    <AppRoutes />
    </>
  );
}

export default App;
