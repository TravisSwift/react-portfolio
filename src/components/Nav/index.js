import React, { useEffect, } from 'react';
// import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    setCurrentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
         
          <span>Travis A. Swift</span>
         
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setCurrentPage("About")}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${ 'navActive'}`}>
            <span onClick={() => setCurrentPage("Contact")}>Contact</span>
          </li>
          <li className={`mx-2 ${'navActive'}`}>
            <span onClick={() => setCurrentPage("Gallery")}>Portfolio</span>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
