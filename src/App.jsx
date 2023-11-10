import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GreetingPage from "./components/GreetingPage/greetingPage";
import MainPage from './components/MainPage/mainPage';
import Gallery from './components/Gallery/gallery';
import Blog from './components/Blog/blog';

import './App.css';
import NavigationMenu from './components/NavigationMenu/navigationMenu';

const App = () => {

  const [navBarVisibility, setNavBarVisibility] = useState(true);

  return (
    <div>
      <BrowserRouter basename='/'>
        <div style={{ float: 'left', visibility: navBarVisibility ? 'visible' : 'hidden' }}>
          <NavigationMenu />
        </div>
        <Routes>
          <Route exact path='/' element={<GreetingPage setNavBarVisibility={setNavBarVisibility} />} />
          <Route path='/MainPage' element={<MainPage />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
