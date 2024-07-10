import React from 'react';

const JobListing = ({ job, addFilter }) => {
  const {
    company,
    logo,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
    role,
    level,
    new: isNew,
    featured
  } = job;

  const tags = [role, level, ...languages, ...tools];

  return (
    <div className={`job-listing ${featured ? 'featured' : ''}`}>
      <img src={process.env.PUBLIC_URL + logo} alt={`${company} logo`} className="company-logo" />
      <div className="job-details">
        <div className="company-info">
          <h3>{company}</h3>
          {isNew && <span className="new-label">NEW!</span>}
          {featured && <span className="featured-label">FEATURED</span>}
        </div>
        <h2>{position}</h2>
        <p>{postedAt} • {contract} • {location}</p>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag" onClick={() => addFilter(tag)}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default JobListing;