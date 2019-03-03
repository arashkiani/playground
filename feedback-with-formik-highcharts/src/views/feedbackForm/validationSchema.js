import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  rate: Yup.number()
    .min(1)
    .max(5)
    .required("Required")
    .positive("Please Rate")
    .integer(),
  comment: Yup.string().max(350, "Too Long!")
});
