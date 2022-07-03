import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';



function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Apps',
    },
    // { name: 'contact', description: 'Contact'},
    // { name: 'resume', description: 'View and download resume'}
 
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            {/* <ContactForm></ContactForm> */}
          </>
        )
         : (
          <ContactForm></ContactForm>
          )
          
          
          }
          
            <footer currentCategory={currentCategory}></footer>
         
      </main>
    </div>
  );
}

export default App;