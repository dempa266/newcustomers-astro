import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import FaqItem from "../components/FaqItem";

type Props = {
  data: {
    heading: string;
    questions: any;
  };
};

export default function LazyblockFaq(props: Props) {
  const questions = JSON.parse(decodeURIComponent(props.data.questions));

  return (
    <section itemScope itemType="https://schema.org/FAQPage">
      <div className="px-6 mx-auto max-w-4xl lg:px-8">
        <div className="max-w-5xl mx-auto divide-y divide-gray/10">
          <h2 className="">{props.data.heading}</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray/10 ">
            {questions.map((question: any, index: number) => (
              <FaqItem
                key={index}
                index={index}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export const LazyblockFaqFragment = `
... on LazyblockFaq {
    apiVersion
    blockEditorCategoryName
    attributes {
        heading
        questions
    }
}
`;
