import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Mainpage from './pages/Mainpage'
import Bookmarklist from './pages/Bookmarklist'
import ProductsList from './pages/Productslist';
import Error from './components/Error'
import Loading from './components/Loading'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Mainpage /> },
      { path: '/bookmark', element: <Bookmarklist /> },
      { path: '/products/list', element: <ProductsList /> },
      { path: '/Loading', element: <Loading /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
