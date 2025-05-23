import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <section
        className="section1"
        style={{
          backgroundImage: "url('/images/homebg.jpg')",
        }}
      >
        <div className="content1">
          <h2>Welcome to Job Board Platform</h2>
          <p>
            Job Board is a platform that creates opportunity for both Job Owners
            and Job seekers to venture into jobs with ease.
          </p>
          <br />
          <p>
            Find the latest job opportunities and career tips tailored for you.
            Register today to explore and post jobs!
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="hero-btn">
              Browse Latest Jobs
            </Link>
            <Link to="/post-job" className="hero-btn">
              Post A Free Job Advert
            </Link>
            <button className="hero-btn">Professional CV Writing</button>
          </div>
        </div>
      </section>
      <section className="top-jobs">
        <div className="top-jobs-header">
          <h3>Browse Top Job Categories</h3>
          <Link to="/jobs" className="view-all-link">
            View all jobs →
          </Link>
        </div>
        <p className="subtitle">Job Search Made Easy For You</p>
        <div className="job-categories">
          {[
            "Front-End Developer",
            "Administration",
            "Banking",
            "IT Consultant",
            "Full-Stack Developer",
            "Software Engineering",
          ].map((category, index) => (
            <div
              key={index}
              className={`job-card ${
                category === "Front-End Developer" ? "highlight" : ""
              }`}
            >
              <h4>{category}</h4>
              <p>More than {Math.floor(Math.random() * 400 + 20)} jobs</p>
              <Link to="/jobs" className="explore-link">
                Explore Jobs →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
