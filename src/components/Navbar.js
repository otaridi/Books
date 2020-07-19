import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarRef = useRef();

  useEffect(() => {
    const scroll = () => {
      const { current } = navbarRef;
      window.scrollY > 100
        ? current.classList.add('shadow')
        : current.classList.remove('shadow');
    };
    window.addEventListener('scroll', scroll);
  }, []);
  return (
    <>
      <nav className='nav-container' ref={navbarRef}>
        <div>
          <ul className='nav-ul'>
            <li>
              <NavLink
                to='/'
                className='inactive'
                activeClassName='active'
                exact={true}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/favorites'
                className='inactive'
                activeClassName='active'
                exact={true}
              >
                favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <img
          className='section-image'
          src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg'
        />
      </section>
    </>
  );
};

export default Navbar;
