import coverImage from "../../assets/cover/cover-image.jpg";
import React from 'react';

function About() {

return (
  <section class="center" className="my-5" >
    <h1 id="about">Who am I?</h1>
    <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover"/>
    <div className="my-2">
      <p>
      A Junior Developer and graduate of the University of Texas Full Stack Developer course working with HTML, CSS, JS, API's, Node.js, Express.js, SQL, NoSQL, OOP, ORM, MCV, PWA's, React, MERN, and State.
      
      <p>I would like to focus on coding for games and seeing what fun can be created with Javascript. So many ideas, so little time.</p>

      Leader, manager, trainer and team member looking for the next experience. 

      <p></p>
      <hr />

      Email: travis.arthur.swift@gmail.com <p></p> Linkedin: https://www.linkedin.com/in/travis-swift/
      </p>
    </div>
  </section>
);
}

export default About;