import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CardList from './components/home/CardList';
import Favorites from './components/favorites/Favorites';
import Details from './components/details/Details';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=subject:science&filter=partial'
      )
      .then((response) => {
        dispatch({ type: 'FETCH_BOOKS', payload: response.data });
      })
      .catch((error) => {
        throw error;
      });
  }, [dispatch]);
  // data from redux
  const bookData = useSelector((state) => state.items);
  return (
    <Router>
      <div className='main-container'>
        <header></header>
        <Navbar />
        <main>
          <Route
            path='/'
            exact
            render={(props) => <CardList {...props} bookData={bookData} />}
          />
          <Route path='/favorites' exact component={Favorites} />
          <Route path='/details' exact component={Details} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
