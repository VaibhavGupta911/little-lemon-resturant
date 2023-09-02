import * as Yup from 'yup';


export const signUpSchema = Yup.object(
    {
        name: Yup.string().min(5).max(25).required("Required Name"),
        email: Yup.string().email().required("Required Email"),

        date: Yup.date().min(new Date()).required(),
        guest: Yup.number().min(1).max(10).required("Required Guest"),
        occasion: Yup.string().required(),
        time: Yup.string().required(),
    }
);

{/*  
 password: Yup.string().min(5).max(25).required("Please Enter Valid Passowrd"),
        confirm_password: Yup.string()
            .required("Required Password")
            .oneOf([Yup.ref("password"), null], "Password not Matched"),
*/}