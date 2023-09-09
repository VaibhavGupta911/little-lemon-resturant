import React from "react"
import { useFormik } from "formik"
import { signUpSchema } from "../schemas";
export default function Reservation() {

    {/*
 const [check,setCheck]= useState(false);
   const handlecheck=()=>{
    setCheck(!check)
   }
*/}

    const initialValues = {
        name: "",
        email: "",
        date: "",
        guest: "",
        occasion: "",
        time: "",
    };
    {/* password: "",
        confirm_password: "", */}


    {/*formik can also be used
 but then formik.valee.name should be used*/}
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
        {
            initialValues: initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values) => {
                console.log(values);
                alert("Table booked for " + values.date + " on occasion of " + values.occasion + " for " + values.guest + " guests");
            }

        }

    );
    console.log(errors);
    return (
        <section className="Res-container">
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset >
                        <div>
                            <h2 className="res-form-h2">Register Your Self</h2>
                        </div>
                        <div>
                            <label htmlFor="name"  >Name</label>
                            <input
                                type='name'
                                autoComplete='off'
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            {errors.name && touched.name ? (<p className="error-message">{errors.name}</p>) : null}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type='email'
                                autoComplete="off"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            {errors.email && touched.email ? (<p className="error-message">{errors.email}</p>) : null}
                        </div>
                        {/*
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                id="password"
                                type='password'
                                autoComplete='off'
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            {errors.password && touched.password ? (<p className="error-message">{errors.password}</p>) : null}
                        </div>
                        <div>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input
                                name="confirm_password"
                                id="confirm_password"
                                type='password'
                                autoComplete='off'
                                placeholder="Confirm Password"
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            {errors.confirm_password && touched.confirm_password ? (<p className="error-message">{errors.confirm_password}</p>) : null}
                        </div>
                        */}
                        <div>
                            <label htmlFor="date">Choose Date:</label>
                            <input
                                id="date" name="date"
                                type='date'
                                value={values.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            {errors.date && touched.date ? (<p className="error-message">{errors.date}</p>) : null}
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" name="time"
                                value={values.time} onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option></option>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                            </select>
                        </div>
                        <div>
                            {errors.time && touched.time ? (<p className="error-message">{errors.time}</p>) : null}
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guest:</label>
                            <input
                                id="book-guests"
                                type="number"
                                name="guest"
                                placeholder="Enter number of Guest" min='1' max='10'
                                value={values.guest}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            {errors.guest && touched.guest ? (<p className="error-message">{errors.guest}</p>) : null}
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Select Occasion:</label>
                            <select id="book-occasion" name="occasion"
                                value={values.occasion} onChange={handleChange}>
                                <option></option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                            {errors.occasion && touched.occasion ? (<p className="error-message">{errors.occasion}</p>) : null}
                        </div>
                        <button
                            className="res-btn"
                            type='submit'
                            aria-label='On Click'
                        >
                            Reservation
                        </button>
                    </fieldset>
                </form>

                {/*
           
            <input id="check1" name="check1" type='checkbox' onClick={handlecheck} />
                <label htmlFor="check1">Hide / Unhide</label>
                {check?(<button>Delete Button</button>):null}
           
           */}
            </section>
        </section>
    )
}