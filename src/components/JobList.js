import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import data from '../data/data.json';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterJobs = (job) => {
    if (filters.length === 0) return true;
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every(filter => tags.includes(filter));
  };

  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter(f => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="job-list">
      {filters.length > 0 && (
        <div className="filter-bar">
          {filters.map((filter, index) => (
            <span key={index} className="filter">
              {filter}
              <button onClick={() => removeFilter(filter)}>x</button>
            </span>
          ))}
          <button className="clear-button" onClick={clearFilters}>Clear</button>
        </div>
      )}
      {jobs.filter(filterJobs).map(job => (
        <JobListing key={job.id} job={job} addFilter={addFilter} />
      ))}
    </div>
  );
};

export default JobList;