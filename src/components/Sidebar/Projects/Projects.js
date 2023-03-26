import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProject, setProjects } from "../../../features/filter/filterSlice";
import { useGetProjectsQuery } from "../../../features/projects/projectsApi";

const Projects = () => {
  const {
    data: projects,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetProjectsQuery();
  const { projects: filterProjects } = useSelector((state) => state.filter);
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
      const findItem =
        filterProjects?.find((f) => f.projectName == projectName) || false;

      const handleChecked = (e) => {
        dispatch(setProject(project));
      };

      return (
        <div className="checkbox-container" key={id}>
          <input
            type="checkbox"
            className={colorClass}
            checked={findItem}
            onChange={handleChecked}
          />
          <p className="label">{projectName}</p>
        </div>
      );
    });

  // effect for filter state
  useEffect(() => {
    if (isSuccess) {
      // projects.map((project) => dispatch(setProject(project.projectName)));
      dispatch(setProjects(projects));
    }
  }, [projects, dispatch, isSuccess]);

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default Projects;
