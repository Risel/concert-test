import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ConcertMainPage from './Pages/ConcertMainPage/ConcertMainPage';
import UserPage from './Pages/UserPage/UserPage';
import SinglePostPage from './Pages/SinglePostPage/SinglePostPage';

import React, { useEffect } from 'react'

import { useTypedDispatch } from './utils/Hook';
import { fetchUsers } from './store/slices/userSlice'
import { fetchPosts } from './store/slices/postSlice'
import Navbar from "./components/Navbar/Navbar";


function App(): JSX.Element {

  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchPosts())
  }, [dispatch])
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<ConcertMainPage />} />
        <Route path=':name'>
          <Route index element={<UserPage />} />
          <Route path=':title' element={<SinglePostPage />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
