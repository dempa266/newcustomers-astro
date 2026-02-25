import React from "react";
import Button from "../components/Button";
import ContactFormSmall from "../components/ContactFormSmall";

type Props = {
  data: {
    title: string;
    description: string;
  };
};

export default function LazyblockProcess(props: Props) {
  return (
    <section className="flex items-center justify-between mx-auto max-w-7xl lg:px-8">
      <div className="w-full text-center text-white bg-gray rounded-xl px-6 py-10">
        <h2 className="max-w-xl mx-auto text-4xl">{props.data.title}</h2>
        <p className="max-w-lg mx-auto text-white">{props.data.description}</p>
        <div className="grid max-w-5xl grid-cols-2 lg:grid-cols-4 gap-6 mx-auto my-10">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center w-20 h-20 mx-auto bg-primary rounded-xl">
              <div className="my-auto text-5xl text-gray font-semibold">1</div>
            </div>
            <div className="h-12 mx-auto my-3 border-l-2 border-white"></div>
            <div className="p-2 mx-auto border border-primary rounded-xl">
              <p className="my-auto text-white">
                Skicka in ditt namn och telefonnummer.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center w-20 h-20 mx-auto bg-white text-gray rounded-xl">
              <div className="my-auto text-5xl font-semibold">2</div>
            </div>
            <div className="h-12 mx-auto my-3 border-l-2 border-white"></div>
            <div className="p-2 mx-auto border border-white rounded-xl">
              <p className="my-auto text-white">
                Någon från oss tar kontakt med dig och lyssnar av dina
                funderingar och behov.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center w-20 h-20 mx-auto bg-white text-gray rounded-xl">
              <div className="my-auto text-5xl font-semibold">3</div>
            </div>
            <div className="h-12 mx-auto my-3 border-l-2 border-white"></div>
            <div className="p-2 mx-auto border border-white rounded-xl">
              <p className="my-auto text-white">
                Rätt person med rätt kompetens sätter upp ett möte tillsammans
                med dig så vi kan påbörja vår affärsanalys.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center w-20 h-20 mx-auto bg-white text-gray rounded-xl">
              <div className="my-auto text-5xl font-semibold">4</div>
            </div>
            <div className="h-12 mx-auto my-3 border-l-2 border-white"></div>
            <div className="p-2 mx-auto border border-white rounded-xl">
              <p className="my-auto text-white">
                Vi återkommer med ett konkret förslag på hur vi tillsammans
                skapar fler affärer.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto hidden">
          <form className="flex flex-col lg:flex-row justify-center items-center space-x-2">
            <input
              className="w-full p-2 rounded-lg text-gray"
              placeholder="Webbadress"
            />
            <input
              type="email"
              className="w-full p-2 rounded-lg text-gray"
              placeholder="Mejl"
            />
            <div>
              <Button type="primary" text="Skicka" />
            </div>
          </form>
          <div className="mt-5 space-x-2 text-left col-span-3">
            <input
              type="checkbox"
              name="gdpr"
              id="gdpr"
              className="rounded text-gray form-checkbox"
            />
            <label htmlFor="gdpr" className="mt-4 text-sm leading-6 text-white">
              Genom att skicka detta meddelande godkänner du att vi lagrar och
              hanterar dina personuppgifter i enlighet med vår{" "}
              <a
                href="/integritetspolicy/"
                className="text-white font-bold underline"
              >
                integritetspolicy
              </a>
              .
            </label>
          </div>
        </div>
        <ContactFormSmall />
      </div>
    </section>
  );
}

export const LazyblockProcessFragment = `
... on LazyblockProcess {
  apiVersion
  blockEditorCategoryName
  attributes {
    title
    description
  }
}
`;
