import React, { useState, useEffect } from 'react';
import JobApplicationForm from '../components/JobApplicationForm';

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    setApplications(savedApplications);
  }, []);

  const addApplication = (newApplication) => {
    const updatedApplications = [...applications, { ...newApplication, id: Date.now() }];
    setApplications(updatedApplications);
    localStorage.setItem('jobApplications', JSON.stringify(updatedApplications));
  };

  return (
    <div className="applications">
      <h1>Job Applications</h1>
      <JobApplicationForm onAddApplication={addApplication} />
      <div>
        <h2>Your Applications:</h2>
        <ul>
          {applications.map(app => (
            <li key={app.id}>
              {app.company} - {app.position} ({app.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Applications;
