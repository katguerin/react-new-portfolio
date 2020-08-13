import React from 'react';
import coverImage from "../../assets/cover/op9.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "60%" }} alt="cover" />
      <p>
      I think now that we’re in 2020 we can stop villainizing the witch from Hänsel and Gretel. Some kids ate her house. She gets to eat them. It was a fair deal.
      </p>
    </section>
  );
}

export default About;