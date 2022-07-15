import coverImage from "../../assets/cover/cover-image.jpg";
import profilePic from "../../assets/cover/travisps.png";
import resume from "../../assets/TravisSwiftResume.pdf";
import React from 'react';

function About() {

return (
  <section class="center" className="my-5" >
    <img src={profilePic} className="ui medium circular image, my-2" style={{ width: "10%" }} class="center" alt="cover"/>
    
    {/* <img class="ui medium circular image" src="profilePic"></img> */}
    <h1 id="about">Who am I?</h1>
    <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover"/>
    <div className="my-2">
      <p>
      A Junior Developer and graduate of the University of Texas Full Stack Developer course working with HTML, CSS, JS, API's, Node.js, Express.js, SQL, NoSQL, OOP, ORM, MCV, PWA's, React, MERN, and State.
      <br></br>
      <p>I would like to focus on coding for games and seeing what fun can be created with Javascript. So many ideas, so little time.</p>

      Leader, manager, trainer and team member looking for the next experience. 
      <p></p>
<a href={resume}target="_blank" rel="noreferrer noopener">Résumé</a>

      <p></p>
      <hr />

      
      </p>
    </div>
  </section>
);
}

export default About;