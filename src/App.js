import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    // {
    //   name: 'Gallery',
    //   description: 'Examples of past projects',
    // },
    //{ name: 'contact', description: 'Contact and social media' },
    { name: 'resume', description: 'View and download resume'}
 
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={{name: 'portfolio', description: 'Apps'}}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}


export default App;