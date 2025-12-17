// -------------------------------------------------------
// Config Formik Form Fields ( RegisterForm.data.js)
// --------------------------------------------------------
import * as Yup from "yup";

export function initialValues(){

    return {
        email: "@gmail.com",
        password: "",
        username: "",
    }
};