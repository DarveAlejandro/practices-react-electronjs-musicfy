// -------------------------------------------------------
// Config Formik Form Fields ( RegisterForm.data.js)
// --------------------------------------------------------
import * as Yup from "yup";

export function initialValues(){

    return {
        email:    "",
        password: "",
        username: "",
    };
}

export function validationSchema(){

    return Yup.object({

        username: Yup.string().required("Nombre de Usuario Obligatorio"),
        email:    Yup.string().email("Formato de correo Incorrecto").required("Correo Electronico Obligatorio"),
        password: Yup.string().required("Contraseña Obligatioria")
    });
}