"use client";
import { useState, useEffect } from "react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";

const FaqItem = ({ question, answer, index }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  // This effect runs once when the component mounts
  useEffect(() => {
    // Initially, all answers are hidden
    setIsOpen(false);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="pt-5 cursor-pointer "
      key={index}
      itemProp="mainEntity"
      itemScope
      itemType="https://schema.org/Question"
    >
      <dt onClick={toggleOpen}>
        <div className="flex items-start justify-between w-full text-left ">
          <span
            className="text-lg font-medium leading-7 text-gray-800"
            itemProp="name"
          >
            {question}
          </span>
          <span className="flex items-center ml-6 h-7">
            {isOpen ? (
              <MinusSmallIcon
                className="w-6 h-6 text-gray"
                aria-hidden="true"
              />
            ) : (
              <PlusSmallIcon
                className="w-6 h-6 text-primary"
                aria-hidden="true"
              />
            )}
          </span>
        </div>
      </dt>
      <dd
        className={`pr-12 mt-2 ${!isOpen ? "hidden" : ""}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div
          className="font-light text-gray"
          dangerouslySetInnerHTML={{ __html: answer }}
          itemProp="text"
        ></div>
      </dd>
    </div>
  );
};

export default FaqItem;
