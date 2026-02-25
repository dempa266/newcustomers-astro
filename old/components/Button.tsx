import Link from "next/link";
import React from "react";
import { useEffect } from "react";

type Props = {
  type: string;
  text: string;
  href?: string;
};

export default function Button(props: Props) {
  const getClasses = () => {
    switch (props.type) {
      case "primary":
        return "bg-primary px-5 py-2 rounded-2xl text-sm text-black cursor-pointer hover:bg-primary-dark border border-primary hover:text-black transition";
      case "secondary":
        return "bg-white px-5 py-2 rounded-2xl text-sm text-gray cursor-pointer hover:bg-secondary-dark border border-gray";
      case "transparent":
        return "text-white px-5 py-2 rounded-2xl text-sm text-gray cursor-pointer hover:bg-secondary-dark border border-gray hover:bg-white hover:text-gray";
      default:
        return "bg-primary px-5 py-2 rounded-2xl text-sm text-white cursor-pointer hover:bg-primary-dark hover:text-white border border-primary";
    }
  };
  return (
    <Link href={props.href || "#"} className={getClasses()}>
      {props.text}
    </Link>
  );
}
