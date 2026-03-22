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
                <h4>B.Tech Computer Science</h4>
                <h5>Guru Jambheshwar University</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Currently pursuing a B.Tech in Computer Science & Technology.
              Acquiring strong fundamentals in Data Structures, Algorithms,
              and modern Software Development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Intern</h4>
                <h5>1Stop.ai (Remote)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered Machine Learning projects utilizing CNNs for image classification
              and object detection. Optimized data pipelines with NumPy and OpenCV, reducing
              model convergence time during training phases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Intern</h4>
                <h5>Codec Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Architected a Landmark Detection system using TensorFlow and transfer learning
              to identify geographic landmarks. Applied advanced image normalization
              enhancing accuracy in low-light environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
