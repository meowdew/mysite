import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GreetingPage from './components/GreetingPage/greetingPage';
import MainPage from './components/MainPage/mainPage';
import Gallery from './components/Gallery/gallery';
import Blog from './components/Blog/blog';
import Post from './components/Blog/Post/post';
import './App.css';
import NavigationMenu from './components/NavigationMenu/navigationMenu';

const App = () => {
  const [navBarVisibility, setNavBarVisibility] = useState(false);
  return (
    <div>
      <BrowserRouter basename='/'>
        <div
          style={{
            float: 'left',
            visibility: navBarVisibility ? 'visible' : 'hidden',
          }}
        >
          <NavigationMenu />
        </div>
        <Routes>
          <Route
            exact
            path='/'
            element={<GreetingPage setNavBarVisibility={setNavBarVisibility} />}
          />
          <Route
            path='/mainpage'
            element={<MainPage setNavBarVisibility={setNavBarVisibility} />}
          />
          <Route
            path='/gallery'
            element={<Gallery setNavBarVisibility={setNavBarVisibility} />}
          />
          <Route
            path='/blog'
            element={<Blog setNavBarVisibility={setNavBarVisibility} />}
          />
          <Route
            path='/blog/posts/:id'
            element={<Post setNavBarVisibility={setNavBarVisibility} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
