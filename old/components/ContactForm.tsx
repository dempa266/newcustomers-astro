"use client";
import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

export default function ContactForm() {
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
    formData.append("cc_website", e.target.website.value);
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
    <section id="kontakt" className="py-10 mb-0 bg-gray-light">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-16 my-16 lg:grid-cols-2 sm:gap-y-20 lg:flex-row">
          <div>
            <h2 className="">Kontakta oss</h2>
            <p className="mt-3 text-lg leading-6 text-gray">
              Varmt välkommen till oss på new customers. Vi har specialiserat
              oss på att skapa mer trafik till din webb, få ut mer affärer från
              webben och uppgradera dina kunders kundresa.
            </p>
            <dl className="mt-8 text-base text-gray grid grid-cols-2">
              {/* Stockholm Address */}
              <dt className="sr-only">Stockholm Address</dt>
              <dd>
                <div className="flex h-10 font-semibold">
                  <MapPinIcon className="w-6 h-6 mt-1 text-primary" />
                  <div className="my-auto ml-1">Stockholm</div>
                </div>
                <div>Kungsgatan 9</div>
                <div>111 43 Stockholm</div>
              </dd>
              {/* Göteborg Address */}
              <dt className="sr-only">Göteborg Address</dt>
              <dd>
                <div className="flex h-10 font-semibold">
                  <MapPinIcon className="w-6 h-6 mt-1 text-primary" />
                  <div className="my-auto ml-1">Göteborg</div>
                </div>
                <div>Kungsportsavenyn 21</div>
                <div>411 36 Göteborg</div>
              </dd>
              <div className="mt-6 space-y-3">
                {/* Phone Number */}
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <DevicePhoneMobileIcon
                    className="flex-shrink-0 w-6 h-6 text-gray"
                    aria-hidden="true"
                  />
                  <a href="tel:070 387 71 77" className="ml-3 text-gray">
                    070 387 71 77
                  </a>
                </dd>

                {/* Email */}
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="flex-shrink-0 w-6 h-6 text-gray"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@newcustomers.se"
                    className="ml-3 text-gray"
                  >
                    info@newcustomers.se
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray">
              Letar du efter våra medarbetare?{" "}
              <a
                href="/om-oss/"
                className="font-medium text-gray-700 underline"
              >
                Hitta dem här
              </a>
              .
            </p>
          </div>
          {submitSuccess ? (
            <p className="text-primary font-bold text-center my-auto">
              {submitSuccess}
            </p>
          ) : (
            <form
              action="#"
              method="POST"
              className="lg:flex-auto"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm leading-6 text-gray"
                  >
                    Namn
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm leading-6 text-gray"
                  >
                    Telefon
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm leading-6 text-gray"
                  >
                    E-post
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm leading-6 text-gray"
                  >
                    Hemsida
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm leading-6 text-gray"
                  >
                    Meddelande
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm text-black shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Skicka meddelande
                </button>
              </div>
              <div className="mt-5 space-x-2">
                <input
                  type="checkbox"
                  name="gdpr"
                  id="gdpr1"
                  className="rounded text-gray form-checkbox"
                  onChange={handleGdprChange}
                />
                <label
                  htmlFor="gdpr1"
                  className="mt-4 text-sm leading-6 text-gray"
                >
                  Genom att skicka detta meddelande godkänner du att vi lagrar
                  och hanterar dina personuppgifter i enlighet med vår{" "}
                  <a href="/integritetspolicy/" className="text-primary">
                    integritetspolicy
                  </a>
                  .
                </label>
              </div>
              {submitError && <p className="text-red-500">{submitError}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
