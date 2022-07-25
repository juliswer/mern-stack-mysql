import { Form, Formik } from "formik";

function TasksFormPage() {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
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

            <button>Save</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TasksFormPage;
