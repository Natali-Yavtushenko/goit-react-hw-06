/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Form.module.css";
import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const NameFieldId = useId();
  const NumberFieldId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.items);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: Date.now().toString(), name, number }));
    resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={NameFieldId}>
              Name
            </label>
            <Field
              className={s.field}
              id={NameFieldId}
              name="name"
              placeholder="Anna"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <ErrorMessage name="name" component="div" />

            <label className={s.label} htmlFor={NumberFieldId}>
              Number
            </label>
            <Field
              className={s.field}
              id={NumberFieldId}
              name="number"
              placeholder="7203578"
              type="tel"
              inputMode="numeric"
              pattern="\d*"
            />
            {errors.number && touched.number ? (
              <div>{errors.number}</div>
            ) : null}
            <ErrorMessage name="number" component="div" />

            <button className={s.button} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
