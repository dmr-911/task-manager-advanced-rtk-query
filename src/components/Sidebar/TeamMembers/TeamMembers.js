import React from "react";

const TeamMembers = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
        <div className="checkbox-container">
          <img
            src="/images/avatars/sumit.png"
            className="team-avater"
            alt="/"
          />
          <p className="label">Sumit Saha</p>
        </div>
        <div className="checkbox-container">
          <img src="/images/avatars/sadh.png" className="team-avater" alt="/" />
          <p className="label">Sadh Hasan</p>
        </div>
        <div className="checkbox-container">
          <img
            src="/images/avatars/akash.png"
            className="team-avater"
            alt="/"
          />
          <p className="label">Akash Ahmed</p>
        </div>
        <div className="checkbox-container">
          <img
            src="/images/avatars/salahuddin.png"
            className="team-avater"
            alt="/"
          />
          <p className="label">Md Salahuddin</p>
        </div>
        <div className="checkbox-container">
          <img
            src="/images/avatars/riyadh.png"
            className="team-avater"
            alt="/"
          />
          <p className="label">Riyadh Hassan</p>
        </div>
        <div className="checkbox-container">
          <img
            src="/images/avatars/ferdous.png"
            className="team-avater"
            alt="/"
          />
          <p className="label">Ferdous Hassan</p>
        </div>
        <div className="checkbox-container">
          <img
            src="/images/avatars/almas.png"
            className="team-avater"
            alt="/"
          />
          <p className="label">Arif Almas</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
