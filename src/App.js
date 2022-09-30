import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Blog from './components/Pages/Blog/Blog'
import BlogSingle from './components/Pages/Blog/BlogSingle'
import Contact from './components/Pages/Contact/Contact'
import { Cart } from './components/Pages/Cart/index'
import { Shop } from './components/Pages/Shop'
import { SingleProduct } from './components/Pages/SingleProduct'
import WishList from './components/Pages/WishList'
import SignIn from './components/Pages/Account/SignIn'
import SignUp from './components/Pages/Account/SignUp'
import Account from './components/Pages/Account/Account'
import './App.css'
import MyProfile from './components/Pages/Account/MyProfile'
import MyHistory from './components/Pages/Account/MyHistory'
import MyWishlist from './components/Pages/Account/MyWishlist'

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [users, setUsers] = useState([]);
  let [loggedUser, setLoggedUser] = useState();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);


  const [changed, setChanged] = useState('');

  if (changed) {
    loggedUser = changed;
    let index = users.findIndex(e => e.id === loggedUser.id);
    users[index] = loggedUser;
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    localStorage.setItem('users', JSON.stringify(users));
  };


  return (
    <>
      <Header loggedUser={loggedUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog/*" element={<BlogSingle />} />
        <Route path='/contact' element={<Contact loggedUser={loggedUser} />} />
        <Route path="/cart" element={<Cart loggedUser={loggedUser} />} />
        <Route path="/shop" element={< Shop />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/wishlist" element={<WishList loggedUser={loggedUser} setChanged={setChanged} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account/*" element={<Account loggedUser={loggedUser} setLoggedUser={setLoggedUser} />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myhistory" element={<MyHistory />} />
        <Route path="/mywishlist" element={<MyWishlist />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
