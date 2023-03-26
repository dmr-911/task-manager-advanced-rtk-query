import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import Task from "./Task";

const TaskList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const { projects, search } = useSelector((state) => state.filter);

  // filter by projects
  const filterByProjects = (task) => {
    const taskExists = projects.find(
      (project) =>
        project.id === task.project.id &&
        project.projectName.trim().toLowerCase() ===
          task.project.projectName.trim().toLowerCase()
    );

    if (taskExists) {
      return true;
    } else {
      return false;
    }
  };

  //filter by search
  const filterBySearchText = (task) => {
    if (search) {
      return task.taskName
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    } else {
      return true;
    }
  };

  // filter tasks with search and filter
  const taskToShow = tasks
    ?.filter(filterByProjects)
    ?.filter(filterBySearchText);

    
  // decide what to render
  let content = null;

  if (isLoading) content = <div>Loading tasks...</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && !tasks?.length)
    content = <div>No tasks found!</div>;

  if (!isLoading && !isError && tasks?.length)
    content = tasks.map((task) => <Task key={task.id} task={task} />);
  return <div className="lws-task-list">{content}</div>;
};

export default TaskList;
