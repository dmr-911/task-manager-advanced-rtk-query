import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProject } from "../../../features/filter/filterSlice";
import { useGetProjectsQuery } from "../../../features/projects/projectsApi";

const Projects = () => {
  const { data: projects, isLoading, isError, error } = useGetProjectsQuery();
  const dispatch = useDispatch();

  // decide what to render
  let content = null;

  if (isLoading) content = <div>Loading team projects...</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && !projects?.length)
    content = <div>No projects found!</div>;

  if (!isLoading && !isError && projects?.length)
    content = projects.map((project) => {
      const { id, projectName, colorClass } = project || {};
      return (
        <div className="checkbox-container" key={id}>
          <input type="checkbox" className={colorClass} defaultChecked />
          <p className="label">{projectName}</p>
        </div>
      );
    });

  // effect for filter state
  useEffect(() => {
    if (projects?.length) {
      projects.map((project) => dispatch(setProject(project.projectName)));
    }
  }, [projects, dispatch]);

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default Projects;
