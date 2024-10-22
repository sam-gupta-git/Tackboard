import React, { useState } from 'react';

function JobApplicationForm({ onAddApplication }) {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    dateApplied: '',
    status: 'Applied'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddApplication(formData);
    setFormData({
      company: '',
      position: '',
      dateApplied: '',
      status: 'Applied'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        required
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="date"
        name="dateApplied"
        value={formData.dateApplied}
        onChange={handleChange}
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Application</button>
    </form>
  );
}

export default JobApplicationForm;