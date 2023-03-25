import React from "react";
import { useGetTeamQuery } from "../../../features/team/teamApi";
import Member from "./Member";

const TeamMembers = () => {
  const { data: members, isError, isLoading, error } = useGetTeamQuery();

  // decide what to render
  let content = null;

  if (isLoading) content = <div>Loading team members...</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && !members?.length)
    content = <div>No members found!</div>;

  if (!isLoading && !isError && members?.length)
    content = members.map((member) => (
      <Member key={member.id} member={member} />
    ));
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default TeamMembers;
