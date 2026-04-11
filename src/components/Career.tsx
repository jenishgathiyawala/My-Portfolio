import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Entrepreneur</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Focused on building and scaling iOS products independently, combining strong engineering with thoughtful user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior iOS Developer</h4>
                <h5>Beetonz Infotech, Surat</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Mentored developers, built scalable iOS apps including Geotag Map Camera and Face Swap Video. Improved app performance, ensured stability, defined code architecture, and led API integration across features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
