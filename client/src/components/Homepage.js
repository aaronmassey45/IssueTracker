import React from 'react';

import ProjectSearchbar from './ProjectSearchbar';

export default () => {
  return (
    <div className="container homepage">
      <h1>Issue Tracker</h1>
      <h3>
        <a
          href="https://learn.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          freeCodeCamp
        </a>{' '}
        Information Security and Quality Assurance Project
      </h3>
      <div className="tech">
        Core Technologies Used:
        <ul>
          <li>ReactJs</li>
          <li>Node/Express</li>
          <li>MongoDB/Mongoose</li>
        </ul>
      </div>
      <ProjectSearchbar />
    </div>
  );
};
