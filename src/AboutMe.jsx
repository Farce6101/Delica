import './AboutMe.css';
import ME from './assets/ME.jpg'

function AboutMe() {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              I'm Faustine Delica, your go-to creative and web developer. 
              My passion lies in building beautiful and functional digital experiences. 
              While I'm still growing in my coding journey, I am eager to learn and push 
              my limits to craft designs and applications that make an impact. 
              My goal is to continuously evolve, enhance my skills, and create meaningful connections through my work.
            </p>
            <button className="contact-btn">Contact Me</button>
          </div>
          <div className="right-hero">
            <img src={ME} alt="Faustine Delica" />
        </div>
        
        </div>
      </div>
    );
  }

export default AboutMe;