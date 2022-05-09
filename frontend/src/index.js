import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Create_account from './pages/create_account/CreateAccount';
import Create_post from './pages/create_post/App';
import Login from './pages/login/LoginPage';
import Home from './pages/home/homepage';
import PostShow from './pages/postShow/postshow';
import GoodsClassifyComponent from './pages/classify/classify';
import IndexComponent from './pages/store/IndexComponent';
import UserComponent from './pages/user/UserComponent';
import CartComponent from './pages/cart/CartComponent';
import Chatroom from './pages/chat/chat';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';

ReactDOM.render(
 <React.StrictMode>
   <Router>
       <Routes>
         <Route path='/Create_account' element={<Create_account />} />
         <Route path='/Create_post' element={<Create_post />} />
         <Route path='/Login' element={<Login />} />
         <Route path='/PostShow' element={<PostShow />} />
         <Route path='/store' element={<IndexComponent />} />
         <Route path='/classify' element={<GoodsClassifyComponent />} />
         <Route path='/user' element={<UserComponent />} />
         <Route path='/cart' element={<CartComponent />} />
         <Route path='/chat' element={<Chatroom />} />
         <Route path='/' element={<Home />} />
         <Route path="*" element={<NoMatch/>} />
       </Routes>
     </Router>
 </React.StrictMode>,
 document.getElementById('root')
);

function NoMatch() {
  let location = useLocation();
  return (
  <div>
  <h3>
  No match for <code>{location.pathname}</code>
  </h3>
  </div>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
