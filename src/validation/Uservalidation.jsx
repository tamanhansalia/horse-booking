import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number is too short")
    .max(10, "Phone number is too long"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  selectedHorse: yup.string().required("Please select a horse"),
});
