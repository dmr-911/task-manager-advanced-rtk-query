import React from "react";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import Task from "./Task";

const TaskList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();

  // tags
  let tags = [];

  const tagsQuery = tags.map((tag) => ``);

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
