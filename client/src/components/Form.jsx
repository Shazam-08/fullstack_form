import React from "react";
import { useFormik } from "formik";

const intialValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirm_password: "",
  address: "",
};

function Form() {
  const { values, errors, touched, handleBlur, handleChange, HandleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log("The values are: ", values);
        action.resetForm();
      },
    });
  return (
    <div>
      <div>
        <h1>This is a Form with Validation from Frontend and Backend</h1>
        <div>
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              <label>Mobile:</label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="+91"
                autoComplete="off"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {errors.mobile && touched.mobile ? (
                  <p>{errors.mobile}</p>
                ) : null}
              </div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                autoComplete="off"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {errors.confirm_password && touched.confirm_password ? (
                  <p>{errors.confirm_password}</p>
                ) : null}
              </div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                autoComplete="off"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div>
                {errors.address && touched.address ? (
                  <p>{errors.address}</p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
