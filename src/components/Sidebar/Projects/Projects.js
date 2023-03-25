import React from "react";

const Projects = () => {
  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">
        <div className="checkbox-container">
          <input type="checkbox" className="color-scoreboard" defaultChecked />
          <p className="label">Scoreboard</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="color-flight" defaultChecked />
          <p className="label">Flight Booking</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="color-productCart" defaultChecked />
          <p className="label">Product Cart</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="color-bookstore" defaultChecked />
          <p className="label">Book Store</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="color-blog" defaultChecked />
          <p className="label">Blog Application</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="color-jobFinder" defaultChecked />
          <p className="label">Job Finder</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
