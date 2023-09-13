import React from 'react';
import './CenteredBar.css';

const MenuItems = [
  // Add the search bar
  
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user"
  },

  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info"
  },

  {
    title: "Post",
    url: "/post",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase"
  },

  {
    title: "Login",
    url: "/login",
    cName: "nav-links-mobile"
  },
];

function CenteredBar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Dev@Deakin</h1>
      <div className="CenterContent">
        <input type="text" placeholder="Search" className="SearchInput" />
      </div>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.cName} href="/">
              <i className={item.icon}></i>
              {item.title}
            </a>
          </li>
        ))}

        {/* Add the search bar here */}
        <li>
          <a className="nav-search" href="/">
            <i className="fas fa-search"></i>
            <button>Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default CenteredBar;