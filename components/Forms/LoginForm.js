import { Field, Form, Formik, ErrorMessage } from "formik";

import { FormSubmitBtn } from "../UI/buttons";
import FormValidationError from "../UI/FormValidationError";
import PasswordShowHide from "../UI/PasswordShowHide";
import { FormGroup } from "./Form";
import { LoginValidation } from "../../lib/InputValidation.js/AuthValidation";

export default function LoginForm({ submitHandler }) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submitHandler}
      validationSchema={LoginValidation}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
            <label htmlFor="email" className=" form-label">
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className=" form-input  form-input-focus"
            />
            <FormValidationError>
              <ErrorMessage name="email" />
            </FormValidationError>
          </FormGroup>
          <FormGroup>
            <label htmlFor="password" className=" form-label">
              Password
            </label>
            <Field name="password" id="password" component={PasswordShowHide} />
            <FormValidationError>
              <ErrorMessage name="password" />
            </FormValidationError>
          </FormGroup>

          <FormSubmitBtn type="submit" disabled={isSubmitting}>
            Login
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
}
