import { Field, Form, Formik, ErrorMessage } from "formik";
import { FormSubmitBtn } from "../UI/buttons";
import { FormGroup } from "./Form";

export default function HandleForm({ submitHandler }) {
  return (
    <div className="mt-20 w-screen flex justify-center">
      <div className="w-1/2 h-20 flex justify-center items-center shadow-md">
        <label htmlFor="handle" className="mr-10 form-label">
          Enter Handle
        </label>
        <input
          type="text"
          name="handle"
          id="handle"
          className="p-2 border-2 focus:border-white mr-20"
        />
        <button className="border-2 p-2 w-50" onClick={submitHandler}>
          submit
        </button>
      </div>
    </div>
  );
}
