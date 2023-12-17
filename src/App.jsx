import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/mainPage';
import Gallery from './components/Gallery/gallery';
import Blog from './components/Blog/blog';
import Post from './components/Blog/Post/post';
import NavBar from './components/NavBar/navBar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/posts/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
