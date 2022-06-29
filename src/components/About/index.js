import coverImage from "../../assets/cover/cover-image.jpg";
import React from 'react';

function About() {
  return (
<section className="my-5">
  <h1 id="about">“Any sufficiently advanced technology is indistinguishable from magic”</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  <h1>About Me</h1>
A Junior Developer and graduate of the University of Texas Full Stack Developer course. Experience with HTML, CSS, JS, API's, Node.js, Express.js, SQL, NoSQL, OOP, ORM, MCV, PWA's, React, MERN, and State.
I would like to focus on coding for games and seeing what I can create with Javascript. So many ideas, so little time. </section>
  );
}

export default About;