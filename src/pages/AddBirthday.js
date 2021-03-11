import React from 'react'
import PageWrapper from "../components/PageWrapper";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);

    return (
        <>
            <label className="text-sm mb-2 mt-4" htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input rounded mb-2" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error text-xs text-red-500">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className=" mb-2 mt-4">
            <label className="checkbox-input text-sm">
                <input className="mr-2 rounded" type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-xs text-red-500 mt-2">{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label className="text-sm mt-4" htmlFor={props.id || props.name}>{label}</label>
            <br/>
            <select className="rounded my-2 w-full" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error text-xs text-red-500">{meta.error}</div>
            ) : null}
        </div>
    );
};

const AddBirthday = () => {
    return (
        <PageWrapper>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl text-center mb-5">Add Birthday</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                }}

                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    phoneNumber: Yup.number()
                        .max(11, 'Must be 11 characters or less')
                        .required('Required'),

                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),

                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),

                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="flex flex-col">
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                    />

                    <MyTextInput
                        label="Phone Number"
                        name="phoneNumber"
                        type="number"
                        placeholder="Doe"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />

                    <MySelect label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect>

                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>

                    <button className="bg-indigo-600 text-white rounded py-2 mt-4" type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        </PageWrapper>
    )
}

export default AddBirthday
