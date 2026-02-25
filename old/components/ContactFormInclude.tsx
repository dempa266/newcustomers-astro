"use client";
import React, { useState } from "react";

export default function ContactFormInclude() {
  const [isGdprChecked, setGdprChecked] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isGdprChecked) {
      setSubmitError(
        "Du behöver godkänna vår integritetspolicy innan du kan skicka meddelandet."
      );
      return;
    }
    setSubmitError("");
    // Form submission logic here
    // Submit to https://wp.newcustomers.se/wp-json/contact-form-7/v1/contact-forms/04620bb/contact

    const formData = new FormData();
    formData.append("cc_name", e.target.name.value);
    formData.append("cc_email", e.target.email.value);
    formData.append("cc_phone", e.target.phone.value);
    formData.append("cc_company", e.target.company.value);
    formData.append("cc_message", e.target.message.value);
    formData.append("apiKey", "6321a3ced5af44fcd7338ac0");

    // Add cookie data from the _cc cookie
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
      const [key, value] = cookie.split("=");
      if (key === "_cc") {
        formData.append("cookie", value);
      }
    });

    fetch("https://api.customerconnect.se/submissions", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitSuccess("Tack för ditt meddelande!");
        // Reset form
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleGdprChange = (e: any) => {
    setGdprChecked(e.target.checked);
  };

  return (
    <>
      {submitSuccess ? (
        <p className="text-primary font-bold text-center my-auto">
          {submitSuccess}
        </p>
      ) : (
        <form
          action="#"
          method="POST"
          className="lg:flex-auto text-white pt-5"
          onSubmit={handleSubmit}
        >
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Namn"
              className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="phone"
              placeholder="Telefon"
              className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="E-post"
              className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="company"
              placeholder="Företag"
              className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
            <div>
              <button
                type="submit"
                className="block rounded-2xl bg-primary px-10 py-2.5 text-center text-sm text-black shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Skicka
              </button>
            </div>
            <div className="space-x-2">
              <input
                type="checkbox"
                name="gdpr"
                id="gdpr1"
                className="rounded text-gray form-checkbox"
                onChange={handleGdprChange}
              />
              <label
                htmlFor="gdpr1"
                className="mt-4 text-sm leading-6 text-gray-300"
              >
                Genom att skicka detta meddelande godkänner du att vi lagrar och
                hanterar dina personuppgifter i enlighet med vår{" "}
                <a href="/integritetspolicy/" className="text-primary">
                  integritetspolicy
                </a>
                .
              </label>
            </div>
          </div>
          {submitError && <p className="text-red-500">{submitError}</p>}
        </form>
      )}
    </>
  );
}
