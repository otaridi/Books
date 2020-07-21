import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarRef = useRef();

  useEffect(() => {
    const scroll = () => {
      const { current } = navbarRef;
      window.scrollY > 30
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
          src='https://cdn.accentuate.io/51528957999/4528701440047/Classics-Final.jpg?1400x500'
          alt='i'
        />
      </section>
    </>
  );
};

export default Navbar;
