import React from "react"
import { useFormik } from "formik"

export default function Reservation() {
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate, onSubmit: values => {
            alert("Table is Reserved");
        },
    })

    return (
        <section className="Res-container">
            <section>
                <form  onSubmit={formik.handleSubmit}>
                    <fieldset >
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" name="book-date" type='date' required/>
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="book-guests">Number of Guest:</label>
                            <input id="book-guests" type="number" placeholder="Enter number of Guest" min='1' max='10' required />

                        </div>
                        <div>
                            <label htmlFor="book-occasion">Select Occasion:</label>
                            <select id="book-occasion" required>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                            <input className="res-btn" type='submit' aria-label='On Click' value={"Make Reservation"} />
                    </fieldset>
                </form>
            </section>
        </section>
    )
}