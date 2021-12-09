import styles from "./OrderForm.module.scss";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const orderSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Name field is Required'),
    surname: Yup.string()
        .min(4, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Surname field is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is Required'),
    country: Yup.string()
        .min(4, 'Too Short!')
        .required('Country is Required'),
    city: Yup.string()
        .min(3, 'Too Short!')
        .required('City is Required'),
    postOffice: Yup.string()
        .min(5, 'Too Sort')
        .required('street is Required')
});

interface FormModel {
    name: string,
    surname: string,
    email: string,
    country: string,
    city: string,
    postOffice: string,
}

export const OrderForm = () => {
    return (
        <div>
            <Formik<FormModel>
                initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    country: "",
                    city: "",
                    postOffice: "",
                }}
                validationSchema={orderSchema}
                onSubmit={(values) => {
                    alert("Order made successfully!");
                }}
            >
                {({handleSubmit, errors, touched}) => {
                    return (
                        <Form className={styles.form} onSubmit={handleSubmit}>
                            <div>
                                <label className={styles.label} htmlFor="name">Name</label>
                                <Field className={styles.field} name="name"/>
                                {errors.name && touched.name ? (
                                    <div className={styles.error}>{errors.name}</div>
                                ) : null}
                            </div>

                            <div>
                                <label className={styles.label} htmlFor="surname">Surname</label>
                                <Field className={styles.field} name="surname"/>
                                {errors.surname && touched.surname ? (
                                    <div className={styles.error}>{errors.surname}</div>
                                ) : null}
                            </div>

                            <div>
                                <label className={styles.label} htmlFor="email">E-mail</label>
                                <Field className={styles.field} name="email"/>
                                {errors.email && touched.email ? (
                                    <div className={styles.error}>{errors.email}</div>
                                ) : null}
                            </div>

                            <div>
                                <label className={styles.label} htmlFor="country">Country</label>
                                <Field className={styles.field} name="country"/>
                                {errors.country && touched.country ? (
                                    <div className={styles.error}>{errors.country}</div>
                                ) : null}
                            </div>

                            <div>
                                <label className={styles.label} htmlFor="city">City</label>
                                <Field className={styles.field} name="city"/>
                                {errors.city && touched.city ? (
                                    <div className={styles.error}>{errors.city}</div>
                                ) : null}
                            </div>

                            <div>
                                <label className={styles.label} htmlFor="postOffice">Post Office</label>
                                <Field className={styles.field} name="postOffice" />
                                {errors.postOffice && touched.postOffice ? (
                                    <div className={styles.error}>{errors.postOffice}</div>
                                ) : null}
                            </div>

                            <button className={styles.order_button} type="submit">Make order</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}