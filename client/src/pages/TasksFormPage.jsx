import { Form, Formik } from "formik";

function TasksFormPage() {
  return (
    <>
      <Formik>
        <Form>
          <label>Title</label>
          <input type="text" name="title" placeholder="Write a title" />

          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write a description"
          ></textarea>

          <button>
            Save
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default TasksFormPage;
