import coverImage from "../../assets/cover/cover-image.jpg";
import React from 'react';

function About() {
  return (
<section className="my-5">
  <h1 id="about">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  <h1>Lorem Ipsum</h1>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est neque, varius a nisl quis, convallis scelerisque turpis. Mauris vitae arcu sit amet ligula mollis tincidunt. Quisque luctus sapien ut quam aliquet, vitae sollicitudin enim faucibus. In hac habitasse platea dictumst. Pellentesque at ante nibh. Praesent mollis vel tortor eget dictum. Vestibulum sit amet dolor euismod, pellentesque metus nec, ultricies nunc. Aliquam erat volutpat. Ut pretium augue ligula, quis faucibus magna ultrices lacinia. Integer egestas ex ipsum, nec vehicula lectus iaculis ac. Aenean gravida urna id lacinia gravida. Vivamus augue justo, tristique sit amet euismod ac, blandit nec risus.
</section>
  );
}

export default About;