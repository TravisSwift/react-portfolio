import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Examples of past projects',
    },
    //{ name: 'contact', description: 'Contact and social media' },
    { name: 'resume', description: 'View and download resume'}
    // { name: 'food', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
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
          <Gallery currentCategory={{name: 'portfolio', description: 'examples of past projects'}}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}


export default App;