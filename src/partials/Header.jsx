import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from "../images/hero-image.png";
import Logo from "../images/logo.svg";

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img className="w-36 h-36 md:w-48 md:h-48" src={Logo} />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/*<li>*/}
              {/*  <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>*/}
              {/*</li>*/}
              <li>
                <a href={'mailto:sales@completehemptechnologies.eu'} className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 ">
                  <span className={'font-bold'}>Napisz do nas</span>
                </a>
              </li>
            </ul>

          </nav>

        </div>

      </div>
    </header>
  );
}

export default Header;
