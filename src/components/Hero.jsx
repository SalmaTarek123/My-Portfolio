// import React from 'react';
// import './components.css';
// import profileImg from '../assets/images/me.jpg'; // تأكدي من المسار

// const Hero = () => {
//   return (
//     <section className="hero" id="home">
//       <div className="container">
//         <div className="hero-content">
//           {/* Text Side */}
//           <div className="hero-text">
//             <p className="hero-kicker">Data Science Graduate</p>
//             <h1 className="hero-title">
//               Turning Data into<br />
//               <span className="gradient-text">Meaningful Insights</span>
//             </h1>
//             <p className="hero-subtitle">
//               Fresh graduate passionate about extracting stories from data, 
//               building intelligent models, and solving real-world problems 
//               with curiosity and precision.
//             </p>

//             <div className="hero-tags">
//               <span className="tag">Python</span>
//               <span className="tag">Machine Learning</span>
//               <span className="tag">SQL</span>
//               <span className="tag">Data Visualization</span>
//             </div>

//             <div className="hero-cta">
//               <a href="#projects" className="btn btn-primary">View My Work</a>
//               <a href="#contact" className="btn btn-secondary">Get In Touch</a>
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className="hero-image-wrapper">
//             <div className="image-glow"></div>
//             <div className="image-frame">
//               <img src={profileImg} alt="Profile" className="profile-img" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




// import React from 'react';
// import './components.css';
// import profileImg from '../assets/images/me.jpg'; // تأكدي من المسار

// const Hero = () => {
//   return (
//     <section className="hero" id="home">
//       <div className="container">
//         <div className="hero-content">
//           {/* Text Side */}
//           <div className="hero-text">
//             <p className="hero-kicker">Salma Tarek — Data Science Graduate</p>
//             <h1 className="hero-title">
//               Turning Data into<br />
//               <span className="gradient-text">Meaningful Insights</span>
//             </h1>
//             <p className="hero-subtitle">
//               Data Science graduate from Alexandria University
//               (GPA 3.58/4.0) who enjoys turning messy, real-world datasets
//               into models and dashboards people can actually act on.
//               Hands-on across machine learning, data analysis and
//               visualization, with certifications in web and Android
//               development on the side.
//             </p>

//             <div className="hero-tags">
//               <span className="tag">Python</span>
//               <span className="tag">Machine Learning</span>
//               <span className="tag">Data Visualization</span>
//               <span className="tag">Multivariate Analysis</span>
//             </div>

//             <div className="hero-cta">
//               <a href="#projects" className="btn btn-primary">View My Work</a>
//               <a href="#contact" className="btn btn-secondary">Get In Touch</a>
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className="hero-image-wrapper">
//             <div className="image-glow"></div>
//             <div className="image-frame">
//               <img src={profileImg} alt="Profile" className="profile-img" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









import React from 'react';
import './components.css';
import profileImg from '../assets/images/me.jpg'; // تأكدي من المسار

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          {/* Text Side */}
          <div className="hero-text">
            <p className="hero-kicker">Junior Data Scientist</p>
            <h1 className="hero-title">
              Hi, I'm<br />
              <span className="gradient-text">Salma Tarek Abdel Meged</span>
            </h1>
            <p className="hero-subtitle">
              A Data Science graduate from Alexandria University
              (GPA 3.58/4.0) who enjoys turning messy, real-world datasets
              into models and dashboards people can actually act on.
              Hands-on across machine learning, data analysis and
              visualization, with certifications in web and Android
              development on the side.
            </p>

            <div className="hero-tags">
              <span className="tag">Python</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Data Visualization</span>
              <span className="tag">Multivariate Analysis</span>
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>

          {/* Image Side */}
          <div className="hero-image-wrapper">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;