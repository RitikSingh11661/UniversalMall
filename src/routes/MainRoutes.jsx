
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PrivateRoute } from './PrivateRoute';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Orders } from '../pages/Orders';
import { Cart } from '../pages/Cart';
import { NotFound } from '../pages/NoteFound';
import { Admin } from '../pages/Admin';
import { SingleProductPage } from '../pages/SingleProductPage';
import { Product } from '../pages/Product';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path='/orders' element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default MainRoutes