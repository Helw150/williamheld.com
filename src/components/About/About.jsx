import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    const style = { textAlign: "justify", maxWidth: "700px", margin: "0 auto" };
    return (
      <div style={style} className="about">
        <h2>Who am I?</h2>
        <p>
          {" "}
          I am a Junior Student at NYU Abu Dhabi where I study Computer Science
          and research Natural Language Processing. Research wise, I am a
          contributor to the Computational Approaches to Modeling languages lab
          at NYU AD and spent two summers working on multi-threaded Linear
          Algebra code for the Computer Science Research Institute at Sandia
          National Labs. Professionally, I worked primarily with smaller
          startups. First as a Front-End engineer at Quorum Analytics and then
          as a Data Scientist at Knotch. Brief work descriptions can be found{" "}
          <a href="/work/">here.</a>
        </p>
        <h2>What do you want to work on?</h2>
        <p>
          I love working on all things Natural Language. NLP is a field which I
          believe has the ability to create fundamentally new user experience.
          Whether through classification or generation, natural language
          technologies are decreasing the barrier between interacting with a
          human and interacting with an application. In the same way Smart
          Phones mobilized the power of the internet, I believe natural language
          technology with democratize it by making it accesible to everyone who
          speaks a human language. We are already seeing this effect through the
          high usage of Google Home and Alexa by those who previously found
          technology intimidating and unintuitive.
        </p>
        <p>
          While I have worked professionally in front-end, pure mathematics, and
          data science, it is in this intersection of user experience and
          natural language technology that I have focused on in when leading
          projects. With Metalang, I worked to develop a search algorithm that
          would bring full "text" search to audio. Most recently with Loga, I
          have been working to improve the accessibility of Arabic by improving
          OCR accuracy through transfer learning.
        </p>
        <h2>What do you do for fun?</h2>
        <p>
          I'm a huge foodie! My most recent food obsession is "bowls": Acaí,
          Poké, and Gain. In order to maximize my food cravings, I try to always
          work up an appetite somehow. When I am in Abu Dhabi, I love to
          weightlift, especially since I am incredibly spoiled at the lovely NYU
          AD gym. Since moving back to the states to work and study "abroad" I
          have been taking advantage of the cool North American weather and
          training for a marathon. Finally, I try to take advantage of living in
          the World's crossroads, the Middle East, by traveling as much as
          possible. I spent over 10% of the month of January on a airplane and I
          don't regret a second of it.
        </p>
        <h2>I still have a question!</h2>
        <p>
          This about me is probably all you need to know about me (and more),
          but if you have a question still feel free to drop a line at me (AT)
          williamheld.com
        </p>
      </div>
    );
  }
}

export default About;
