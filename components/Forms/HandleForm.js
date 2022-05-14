import { Field, Form, Formik, ErrorMessage } from "formik";
import { FormSubmitBtn } from "../UI/buttons";
import { FormGroup } from "./Form";

export default function HandleForm({ submitHandler }) {
  return (
    <Formik
      initialValues={{
        handle: "",
      }}
      onSubmit={submitHandler}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mt-20 w-screen flex justify-center">
            <div className="w-1/2 h-20 flex bg-white justify-center items-center shadow-md rounded">
              <label htmlFor="handle" className="mr-10 form-label">
                Enter Handle
              </label>
              <Field
                type="text"
                name="handle"
                id="handle"
                className="p-2 border-2 focus:border-white mr-20"
              />

              <button className="border-2 p-2 w-50" type="submit">
                submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
