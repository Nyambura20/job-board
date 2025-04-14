import React, { useState } from "react";

function PostJob() {
  const [postJob, setPostJob] = useState({
    jobtitle: "",
    companyname: "",
    location: "",
    salary: "",
    jobtype: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posted successfully", postJob);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="jobtitle"
          placeholder="Job Title"
          value={postJob.jobtitle}
          onChange={handleChange}
        />
        <br />

        <input
          name="companyname"
          placeholder="Company Name"
          value={postJob.companyname}
          onChange={handleChange}
        />
        <br />

        <input
          name="location"
          placeholder="Location"
          value={postJob.location}
          onChange={handleChange}
        />
        <br />

        <select name="salary" value={postJob.salary} onChange={handleChange}>
          <option value="">Select salary range</option>
          <option value="under_30000">Under $30,000</option>
          <option value="30k_50k">$30,000 - $50,000</option>
          <option value="50k_70k">$50,000 - $70,000</option>
          <option value="70k_100k">$70,000 - $100,000</option>
          <option value="above_100k">Above $100,000</option>
        </select>
        <br />

        <select name="jobtype" value={postJob.jobtype} onChange={handleChange}>
          <option value="">Select job type</option>
          <option value="on-site">On-site</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <br />

        <input
          name="description"
          placeholder="Job Description"
          value={postJob.description}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
