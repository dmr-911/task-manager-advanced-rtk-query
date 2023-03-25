import React from "react";

const Member = ({ member }) => {
  const { name, avatar } = member || {};
  return (
    <div className="checkbox-container">
      <img src={avatar} className="team-avater" alt="/" />
      <p className="label">{name}</p>
    </div>
  );
};

export default Member;
