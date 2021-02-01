import React, { FunctionComponent, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, FormikHelpers } from "formik";
import "./App.scss";

interface MyFormValues {
  arrayLength: string;
}

const MyFormSchema = Yup.object().shape({
  arrayLength: Yup.number()
    .typeError("Must be a number")
    .min(1, "Min value is 1")
    .max(1000, "Max value is 1000")
    .required("Required"),
});

const App: FunctionComponent = () => {
  // const [error, setError] = useState<Object | null>(null);
  const [fetchedData, setFetchedData] = useState<number[] | null>(null);

  const handleFormSubmit = async (
    formikValues: MyFormValues,
    formikHelper: FormikHelpers<MyFormValues>
  ) => {
    try {
      const res = await axios.get(`api/array/${formikValues.arrayLength}`);
      setFetchedData(res.data);
      formikHelper.resetForm();
    } catch (e) {
      formikHelper.setErrors({
        arrayLength: e.response?.data?.error || e.message,
      });
      setFetchedData(null);
    }
  };

  const initialValues: MyFormValues = { arrayLength: "" };

  return (
    <div className="App container">
      <h1>Insert Number for array length</h1>
      <div className="form-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={MyFormSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isValid, dirty, errors }) => (
            <Form>
              <div className="row">
                <div className="input-group offset-md-3 col-md-6 col-sm-12">
                  <Field
                    type="text"
                    name="arrayLength"
                    className={`form-control ${
                      errors?.arrayLength ? "is-invalid" : ""
                    }`}
                    placeholder="Fetch array from server"
                  />
                  <div className="input-group-append">
                    <button
                      disabled={!isValid && dirty}
                      className="btn btn-outline-primary"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-danger">{errors?.arrayLength}</div>
              {fetchedData ? (
                <>
                  <div className="Results">Results: </div>
                  <div>
                    {fetchedData.length
                      ? fetchedData.map((item) => (
                          <span key={item}> {item} </span>
                        ))
                      : "[Empty]"}
                  </div>
                </>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
