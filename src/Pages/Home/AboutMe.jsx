export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p>  commented because of animation overlaping */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am an Aspiring & Creative Full Stack .NET Developer with a passion for building robust, scalable, and user-friendly applications. Skilled in C#, SQL, HTML, CSS, JavaScript and React, with hands-on experience in DevOps tools like Jenkins and Github. With over 1.5 years of experience in the industry, I have a strong understanding of software development life cycle and agile methodologies. My expertise lies in developing, testing, and deploying high-quality software solutions while ensuring code maintainability, scalability, and security. 
          </p>
          <p className="hero--section-description">
          I have a proven track record of collaborating with cross-functional teams and stakeholders to understand business requirements and deliver projects on time. Always eager to learn and stay up-to-date with the latest trends and technologies in the industry. Let's connect and explore opportunities to work together!
          </p>
        </div>
      </div>
    </section>
  );
}
