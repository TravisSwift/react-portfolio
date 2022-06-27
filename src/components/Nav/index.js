import React from 'react';

function Nav() {

  const categories = [
    // {
    //   name: "about",
    //   description:
    //     "About author",
    // },
    {
      name: "portfolio",
      description:
        "Images of projects",
    },
    {
      name: "contact",
      description:
        "Images of projects",
    },


  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }
  


  return (
<header className="flex-row px-1"> 
  <h2>
    <a href="/">
      “Any sufficiently advanced technology is indistinguishable from magic.”
      {/* <h1>“Any sufficiently advanced technology is indistinguishable from magic.”</h1>  */}
    </a>
  </h2>
  <nav >
  <ul className="flex-row">
          <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>

      {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
      <span onClick={() => categorySelected(category.name)} >
        {category.name}
    </span>
  </li>
      ))}
    </ul>
  </nav>
</header>
  );
}



export default Nav;