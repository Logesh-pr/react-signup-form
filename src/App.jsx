import { Box, Grid, Stack, Typography } from "@mui/material";
import furniture from "./assets/furniture.jpg";
import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Mninum 8 characters are required"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "password and confirm password are not matching"
      )
      .required("Please enter your confirm password"),
  });
  const onSubmit = async (values, actions) => {
    console.log(values);

    await new Promise((resolver) => setTimeout(resolver, 1000));
    actions.resetForm();
  };
  const { values, handleChange, handleSubmit, errors, touched, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: schema,
      onSubmit,
    });

  return (
    <>
      <Box sx={{ height: "100%", p: 2 }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ height: { xs: "100%", md: "100vh" } }}
        >
          <div className="container">
            <Box
              sx={{
                bgcolor: "white",
                width: "100%",
                Height: "650px",
                borderRadius: "10px",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <img src={furniture} className="furniture_img" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 3 }}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      sx={{ mt: 4, fontWeight: "600" }}
                    >
                      Welcome To Kings Furniture
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"primary.light"}
                      sx={{ mt: 2 }}
                    >
                      Register Your Account
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <div className="form_control">
                        <label>Name</label>
                        <input
                          id="name"
                          placeholder="Enter Your Name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          className={
                            errors.name && touched.name
                              ? "input_error"
                              : "input_success"
                          }
                        />

                        {errors.name && touched.name && (
                          <span className="error">{errors.name}</span>
                        )}
                      </div>
                      <div className="form_control">
                        <label>Email</label>
                        <input
                          id="email"
                          placeholder="Enter Your Email ID"
                          type="string"
                          value={values.email}
                          onChange={handleChange}
                          className={
                            errors.email && touched.email
                              ? "input_error"
                              : "input_success"
                          }
                        />

                        {errors.email && touched.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                      <div className="form_control ">
                        <label>Password</label>

                        <input
                          id="password"
                          placeholder="Must have 8 characters"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          className={
                            errors.password && touched.password
                              ? "input_error"
                              : "input_success"
                          }
                        />

                        {errors.password && touched.password && (
                          <span className="error">{errors.password}</span>
                        )}
                      </div>
                      <div className="form_control">
                        <label>Confirm Password</label>
                        <input
                          id="confirmPassword"
                          placeholder="Must have 8 characters"
                          type="password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          className={
                            errors.confirmPassword && touched.confirmPassword
                              ? "input_error"
                              : "input_success"
                          }
                        />

                        {errors.confirmPassword && touched.confirmPassword && (
                          <span className="error">
                            {errors.confirmPassword}
                          </span>
                        )}
                      </div>
                      <input
                        disabled={isSubmitting}
                        type="submit"
                        className="btn"
                      />
                    </form>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Stack>
      </Box>
    </>
  );
}

export default App;
