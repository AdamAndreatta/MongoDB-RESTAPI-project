import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className='nav'>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pages/CarsPage">CarsPage</NavLink>
        <NavLink to="/pages/TopicsPage">Topics</NavLink>
    </nav>
  );
}

export default Navigation;
