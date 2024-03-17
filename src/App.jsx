import { Routes, Route } from "react-router-dom";

import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component.jsx';
import Shop from './routes/shop/shop.component.jsx';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
