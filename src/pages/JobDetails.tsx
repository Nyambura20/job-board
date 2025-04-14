import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../components/mock/Jobs";
const JobDetails: React.FC = () => {
  const { id } = useParams(); // grabs job ID from the URL
  const job = jobs.find((job) => job.id === Number(id)); // find job from list

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
    </div>
  );
};

export default JobDetails;
