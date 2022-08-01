import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import { createTaskRequest, updateTaskRequest } from "../api/tasks.api";
import { useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasksHook";

function TasksFormPage() {
  
  const { taskId } = useParams();
  const { tasks, loadTasks } = useTasks();
  const [taskFound, setTaskFound] = useState({});

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (taskId) {
      console.log(taskId);
      console.log(tasks);
      tasks.map((task) => console.log(task.id));
      const task = tasks.find((task) => task.id === taskId);
      console.log(task);
      if (task) {
        console.log(task);
        setTaskFound(task);
      }
    }
  }, [taskId]);

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            let res;
            if (!taskId) {
              res = await createTaskRequest(values);
            } else {
              res = await updateTaskRequest(taskId, values);
            }
            console.log(res);
          } catch (error) {
            console.log(error);
          }
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              autoFocus
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              value={values.description}
              rows="3"
              onChange={handleChange}
              placeholder="Write a description"
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TasksFormPage;
