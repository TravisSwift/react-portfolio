import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Apps',
    },
 
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState("About");
  const renderCurrentPage =() => {
        if (currentPage === "About") {
          return <About/>
        }

        if (currentPage === "Gallery") {
          return <Gallery/>
        }

        if (currentPage === "Contact") {
          return <ContactForm/>
        }

        
  }


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
 
         { renderCurrentPage()}
          
            <Footer></Footer>
         
      </main>
    </div>
  );
}

export default App;