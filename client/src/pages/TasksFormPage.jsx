import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TasksFormPage() {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const res = await createTaskRequest(values);
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              autoFocus
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              onChange={handleChange}
              placeholder="Write a description"
            ></textarea>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TasksFormPage;
