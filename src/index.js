import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import CartItems from './components/CartItems';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Utils/store';
import Search from './components/Search';
import MyOrders from './components/MyOrders';


function App() {

  

  return (
    <Provider store={store}>
     <Header />
     <Outlet />
     <Footer />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<CartItems />
      },
      {
        path:"/search",
        element:<Search />
      },
      {
        path:"/my-orders",
        element:<MyOrders />
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={appRouter} />
  
);


