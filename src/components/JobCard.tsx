import React from "react";
import { Link } from "react-router-dom";

interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}
const JobCard: React.FC<JobProps> = ({
  id,
  title,
  company,
  location,
  salary,
}) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Salary:</strong> {salary}
      </p>

      <Link to={`/jobs/${id}`}>View Details</Link>
    </div>
  );
};

export default JobCard;
