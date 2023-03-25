import React from "react";
import Projects from "./Projects/Projects";
import TeamMembers from "./TeamMembers/TeamMembers";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Projects List */}
      <Projects />
      {/* Team Members */}
      <TeamMembers />
    </div>
  );
};

export default Sidebar;
