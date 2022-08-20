import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import {
  createTaskRequest,
  updateTaskRequest,
  getTaskRequest,
} from "../api/tasks.api";
import { useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasksHook";
import { useMemo } from "react";

function TasksFormPage() {
  const { taskId } = useParams();
  const { loadTasks } = useTasks();
  const [taskFound, setTaskFound] = useState({});
  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
  });

  const updateValues = (_body) => {
    if (taskFound) {
      setInitialValues({
        title: _body.title,
        description: _body.description,
      });
    } else {
      setInitialValues({
        title: "",
        description: "",
      });
    }
  };

  const getTask = async (_id) => {
    const task = await getTaskRequest(_id);
    setTaskFound(task.data.data);
  };

  useMemo(() => {
    updateValues(taskFound);
  }, [taskFound]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (taskId) {
      getTask(taskId);
    }
  }, [taskId]);

  useEffect(() => {
    if (taskFound) {
      setInitialValues({
        title: taskFound.title,
        description: taskFound.description,
      });
    } else {
      setInitialValues({
        title: "",
        description: "",
      });
    }
  }, [taskFound]);

  return (
    <>
      <Formik
        initialValues={{
          title: initialValues.title,
          description: initialValues.description,
        }}
        enableReinitialize={true}
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
