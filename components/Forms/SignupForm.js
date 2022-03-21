import { Field, Form, Formik, ErrorMessage } from "formik";

import CustomPhoneInput from "./components/CustomPhoneInput";
import { FormGroup } from "./Form";
import { FormSubmitBtn } from "../UI/buttons";
import { SignupValidation } from "../../lib/InputValidation.js/AuthValidation";
import FormValidationError from "../UI/FormValidationError";
import PasswordShowHide from "../UI/PasswordShowHide";

export default function SignupForm({ submitHandler }) {
  async function customSubmitHandler(values) {
    const body = {
      ...values,
      phone: "+" + values.phone,
    };
    await submitHandler(body);
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        tnc: false,
      }}
      onSubmit={customSubmitHandler}
      validationSchema={SignupValidation}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
            <label htmlFor="firstName" className="  form-label">
              First Name*
            </label>
            <Field
              type="text"
              name="firstName"
              id="firstName"
              className="  form-input   form-input-focus"
            />
            <FormValidationError>
              <ErrorMessage name="firstName" />
            </FormValidationError>
          </FormGroup>

          <FormGroup>
            <label htmlFor="middleName" className="  form-label">
              Middle Name
            </label>
            <Field
              type="text"
              name="middleName"
              id="middleName"
              className="  form-input   form-input-focus"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="lastName" className="  form-label">
              Last Name*
            </label>
            <Field
              type="text"
              name="lastName"
              id="lastName"
              className="  form-input   form-input-focus"
            />
            <FormValidationError>
              <ErrorMessage name="lastName" />
            </FormValidationError>
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone" className="  form-label">
              Phone Number*
            </label>
            <Field component={CustomPhoneInput} name="phone" id="phone" />
            <FormValidationError>
              <ErrorMessage name="phone" />
            </FormValidationError>
          </FormGroup>

          <FormGroup>
            <label htmlFor="email" className="  form-label">
              Email*
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="  form-input   form-input-focus"
            />
            <FormValidationError>
              <ErrorMessage name="email" />
            </FormValidationError>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password" className="  form-label">
              Password*
            </label>
            <Field name="password" id="password" component={PasswordShowHide} />
            <FormValidationError>
              <ErrorMessage name="password" />
            </FormValidationError>
          </FormGroup>

          <FormGroup>
            <label htmlFor="confirmPassword" className="  form-label">
              Confirm Password*
            </label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="  form-input   form-input-focus"
            />
            <FormValidationError>
              <ErrorMessage name="confirmPassword" />
            </FormValidationError>
            <div className="text-sm mt-4">
              <p className="font-bold">Password should have:</p>
              <ul className="list-disc ml-3">
                <li>Atleast 8 characters</li>
                <li>Atleast one uppercase letter</li>
                <li>Atleast a single number</li>
              </ul>
            </div>
          </FormGroup>

          <div className="relative w-96">
            <FormGroup>
              <label htmlFor="tnc" className="text-lightGray   text-s mx-auto">
                <Field type="checkbox" name="tnc" id="tnc" className="mr-2" />I
                agree to{" "}
                <a href="" className="text-lightBlue">
                  Terms and Conditions
                </a>
                *
              </label>
              <FormValidationError center>
                <ErrorMessage name="tnc" />
              </FormValidationError>
            </FormGroup>
          </div>

          <FormSubmitBtn type="submit" disabled={isSubmitting}>
            Signup
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
}
