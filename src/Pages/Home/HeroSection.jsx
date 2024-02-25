import React from 'react';
// import DownloadCv from './DownloadCv'; // Import the DownloadCv component from the same directory

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Thomas Augustine Tony !</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am an Aspiring Full Stack .NET Developer 
            <br /> with a passion for building robust, scalable, and user-friendly applications.
          </p>
        </div>
        <button className="btn btn-primary" onClick={scrollToContact}>Get In Touch</button>
        <button className="btn btn-secondary" > Download CV </button>
      </div>
      <div className="hero--section--img">
        <img src="./img\hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
