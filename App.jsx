import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Tovar from './pages/Tovar';
import Carta from './pages/Carta';
import Cartag from './pages/Cartag';
import Carter from './pages/Carter';
import Cartap from './pages/Cartap';
import Cartaf from './pages/Cartaf';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>
},
{
  path: "shop",
  element: <Shop/>
},
{
  path: "Tovar",
  element: <Tovar/>
},
{
  path: "/Carta",
  element: <Carta/>
},
{
  path: "/Cartag",
  element: <Cartag/>
},
{
  path: "/Carter",
  element: <Carter/>
},
{
  path: "/Cartap",
  element: <Cartap/>
},
{
  path: "/Cartaf",
  element: <Cartaf/>
},
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App