import React from "react";
import Button from "../components/Button";
import Calculator from "../components/Calculator";

type Props = {
  data: {
    title: string;
    description: string;
  };
};

export default function LazyblockCalculator(props: Props) {
  return (
    <section className="flex items-center justify-between mx-auto max-w-7xl lg:px-8">
      <div className="w-full text-center  bg-gray rounded-xl px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="mx-auto text-white text-4xl">{props.data.title}</h2>
          <p className="mx-auto text-white ">{props.data.description}</p>
        </div>
        <Calculator />
      </div>
    </section>
  );
}

export const LazyblockCalculatorFragment = `
... on LazyblockCalculator {
  apiVersion
  blockEditorCategoryName
  attributes {
    title
    description
  }
}
`;
