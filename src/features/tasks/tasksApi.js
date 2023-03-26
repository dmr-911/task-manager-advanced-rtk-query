import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: `/tasks`,
      }),
    }),

    getTask: builder.query({
      query: (id) => ({
        url: `/tasks/${id}`,
      }),
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // pessimistic cache update
        try {
          const { data: task } = await queryFulfilled;
          // update get tasks cache, when new task is added
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              draft.push(task);
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
        try {
          const { data: task } = await queryFulfilled;
          // update getTasks's cache , when a task is edited
          dispatch(
            apiSlice.util.updateQueryData("getTask", id, (draft) => {
              return task;
            })
          );

          // also update getTasks's cache
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              return draft.map((item) =>
                Number(item?.id) === Number(id) ? task : item
              );
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // optimistic update, update when getTask's cache, when task is deleted
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.filter((task) => task.id !== arg);
          })
        );

        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
