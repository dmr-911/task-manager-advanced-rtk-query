import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useGetProjectsQuery } from "../features/projects/projectsApi";
import {
  useAddTaskMutation,
  useGetTaskQuery,
} from "../features/tasks/tasksApi";
import { useGetTeamQuery } from "../features/team/teamApi";

// {
//   "taskName": "Fix a bug",
//   "teamMember": {
//     "name": "Md Salahuddin",
//     "avatar": "/images/avatars/salahuddin.png",
//     "id": 4
//   },
//   "deadline": "2023-03-18",
//   "project": {
//     "id": 4,
//     "projectName": "Book Store",
//     "colorClass": "color-bookstore"
//   },
//   "id": 5,
//   "status": "completed"
// },

const initialData = {
  taskName: "",
  teamMember: "",
  projectName: "",
  deadline: "",
};

const AddNew = () => {
  const { taskId } = useParams();
  const location = useLocation();
  const getTaskData =
    (taskId && location.pathname.includes("edit-task")) || false;
  const { data: taskData, isSuccess: taskSuccess } = useGetTaskQuery(taskId, {
    skip: !getTaskData,
  });
  const { data: team, isSuccess: teamSuccess } = useGetTeamQuery();
  const { data: projects, isSuccess: projectSuccess } = useGetProjectsQuery();
  const [addTask, { data: addData, isSuccess: addSuccess }] =
    useAddTaskMutation();

  const navigate = useNavigate();
  const [taskForm, setTaskForm] = useState(initialData);

  // load data when edit active
  useEffect(() => {
    setTaskForm({
      taskName: taskData?.taskName,
      teamMember: taskData?.teamMember?.name,
      projectName: taskData?.project?.projectName,
      deadline: taskData?.deadline,
    });
  }, [taskData]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTaskForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    const findProject = projects?.find(
      (project) => project.projectName == taskForm?.projectName
    );
    const findMember = team?.find(
      (member) => member.name == taskForm?.teamMember
    );

    // send to api
    addTask({
      taskName: taskForm?.taskName,
      teamMember: {
        ...findMember,
      },
      deadline: taskForm?.deadline,
      project: {
        ...findProject,
      },
    });
  };

  return (
    <Layout>
      <div className="container relative">
        <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
            Create Task for Your Team
          </h1>
          <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
            <form className="space-y-6" onSubmit={handleAddTask}>
              <div className="fieldContainer">
                <label htmlFor="lws-taskName">Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  id="lws-taskName"
                  required
                  placeholder="Implement RTK Query"
                  value={taskForm?.taskName}
                  onChange={handleChange}
                />
              </div>
              <div className="fieldContainer">
                <label>Assign To</label>
                <select
                  name="teamMember"
                  id="lws-teamMember"
                  required
                  value={taskForm?.teamMember}
                  onChange={handleChange}
                >
                  <option value hidden selected>
                    Select Job
                  </option>
                  {team?.map((t) => (
                    <option value={t.name}>{t.name}</option>
                  ))}
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select
                  id="lws-projectName"
                  name="projectName"
                  required
                  value={taskForm?.projectName}
                  onChange={handleChange}
                >
                  <option value hidden selected>
                    Select Project
                  </option>
                  <option>Scoreboard</option>
                  {projects?.map((p) => (
                    <option value={p.projectName}>{p.projectName}</option>
                  ))}
                </select>
              </div>
              <div className="fieldContainer">
                <label htmlFor="lws-deadline">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  id="lws-deadline"
                  required
                  value={taskForm?.deadline}
                  onChange={handleChange}
                />
              </div>
              <div className="text-right">
                <button type="submit" className="lws-submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default AddNew;
