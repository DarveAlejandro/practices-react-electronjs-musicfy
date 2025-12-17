import * as Yup from "yup";

export function validationSchema(){

    return Yup.object({

        email: Yup.string().email("Email Invalido").required(true),
        password: Yup.string().required(true),
        username: Yup.string().required(true),
    });
}