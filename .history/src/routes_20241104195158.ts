import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Page';
// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
//   {
//     path: '/about',
//     element: <About />,
//   },
]);

export default router;