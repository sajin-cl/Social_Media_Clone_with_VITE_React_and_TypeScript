import App from '@/App';
import ForgetPassword from '@/pages/ForgetPassword';
import Feed from '@/pages/Feed';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { createBrowserRouter } from 'react-router-dom';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Feed/> },
    ],
  },

  /* Login & Register*/
  { path: '/accounts/login', element: <Login /> },
  { path: '/accounts/emailsignup', element: <Register /> },
  { path: '/accounts/password/reset', element: <ForgetPassword /> },

]);