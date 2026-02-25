import React from "react";
import { contactDetails } from "../data/details";
import emailIcon from "../assets/icons/email.svg";
import telephone from "../assets/icons/telephone.svg";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto px-6 pt-4 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-dark-heading dark:text-light-heading">
          Let’s Connect
        </h2>
        <p className="mt-4 text-lg text-content font-semibold">
          Have a question, opportunity, or just want to say hi? Feel free to
          reach out.
        </p>
        <p className="mt-2 text-sm text-content font-semibold">
          Open to Frontend / React roles. Hyderabad / Remote
        </p>
        {/* Contact Card */}
        <div
          className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-700
                          bg-white dark:bg-dark-card shadow-sm p-8 space-y-6"
        >
          {/* Email */}
          <a
            href={`mailto:${email}`}
            aria-label="Send email to Naveen"
            className="flex items-center justify-center gap-2"
          >
            <img src={emailIcon} alt=""></img>
            <span
              className="flex text-2xl md:text-3xl font-semibold
                 bg-gradient-to-r from-purple-600 to-pink-600
                 bg-clip-text text-transparent
                 leading-relaxed pb-1
                 underline-offset-4
                 hover:underline hover:decoration-purple-500
                 transition"
            >
              {email}
            </span>
          </a>

          <span className="block text-content text-sm uppercase tracking-wide">
            or
          </span>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            aria-label="Call Naveen"
            className="flex text-xl md:text-2xl font-semibold
                         text-indigo-600 dark:text-indigo-400
                         hover:underline transition
                         flex items-center justify-center gap-2"
          >
            <img src={telephone} alt=""></img>
            {phone}
          </a>

          {/* CTA */}
          <div className="pt-6">
            <a
              href={`mailto:${email}`}
              className="inline-block px-6 py-3 rounded-full
                           bg-gradient-to-r from-purple-600 to-pink-600
                           text-white font-medium
                           hover:scale-105 transition-transform"
            >
              Send Email
            </a>
          </div>
          <p className="text-xs text-content pt-4">
            I usually respond within 24–48 hours.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
