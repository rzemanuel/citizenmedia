'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEmail } from '@/context/EmailContext';

interface FormValues {
  fname: string;
  lname: string;
  email: string;
  purpose: string;
  message: string;
}

const contactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  fname: Yup.string(),
  lname: Yup.string(),
  purpose: Yup.string(),
  message: Yup.string()
});

const ContactForm = () => {
  const { email } = useEmail();
  const [formStatus, setFormStatus] = useState<{ success?: boolean; error?: string }>({});

  const initialValues: FormValues = {
    fname: "",
    lname: "",
    email: email || "",
    purpose: "0",
    message: ""
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus({ success: true });
        resetForm();
      } else {
        setFormStatus({ success: false, error: data.error });
      }
    } catch (error) {
      setFormStatus({ success: false, error: "Failed to submit form" });
    }
    setSubmitting(false);
  };

  return (
    <div
      data-aos="fade-up-sm"
      className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="row gy-4 text-dark">
            <div className="sm:col-6">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <Field
                type="text"
                className="form-input"
                placeholder="Your First Name"
                id="fname"
                name="fname"
              />
              <ErrorMessage name="fname" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="sm:col-6">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <Field
                type="text"
                className="form-input"
                placeholder="Your Last Name"
                id="lname"
                name="lname"
              />
              <ErrorMessage name="lname" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <Field
                type="email"
                className="form-input"
                placeholder="Your Email Address"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="col-12">
              <label htmlFor="purpose" className="form-label">
                Reason/Purpose
              </label>
              <Field
                as="select"
                id="purpose"
                name="purpose"
                className="w-full rounded-lg border-border px-5 py-4 text-sm"
              >
                <option value="0">General Inquiry</option>
                <option value="1">Support Request</option>
                <option value="2">Partnership Opportunity</option>
              </Field>
              <ErrorMessage name="purpose" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                id="message"
                cols={30}
                rows={4}
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            {formStatus.success && (
              <div className="col-12">
                <div className="bg-green-50 text-green-600 px-4 py-3 rounded-lg text-center font-medium">
                  Form submitted successfully! We'll be in touch soon.
                </div>
              </div>
            )}
            {formStatus.error && (
              <div className="col-12">
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-center font-medium">
                  {formStatus.error}
                </div>
              </div>
            )}
            <div className="col-12 text-right">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm; 