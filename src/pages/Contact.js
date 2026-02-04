import React from "react";
import { contactDetails } from "../data/details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Have a question, opportunity ? Feel free to reach out.
      </h1>
      <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-blue-600 font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h3 className="text-center text-xl md:text-2xl lg:text-4xl text-blue-600 font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
