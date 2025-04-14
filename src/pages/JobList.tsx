import React from "react";
import JobCard from "../components/JobCard";
import jobs from "../components/mock/Jobs";
const JobList: React.FC = () => {
  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
        />
      ))}
    </div>
  );
};

export default JobList;
