import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

type Props = {
  data: {
    id: string;
    path: string;
    label: string;
    parentId: string;
  }[];
};

type ChildItem = {
  id: string;
  path: string;
  label: string;
  parentId: string;
};

export default function Nav({ data }: Props) {
  return (
    <div className="flex h-full">
      <ul className="flex my-auto gap-6 list-none">
        {data.filter &&
          data
            .filter((node: ChildItem) => node.parentId === null)
            .map((parentNode: ChildItem) => {
              // Find children of this parent node
              const children = data.filter(
                (childNode: ChildItem) => childNode.parentId === parentNode.id
              );
              // Check if the parent node has children
              if (children.length === 0) {
                // Render a link if no children
                return (
                  <li className="mb-0" key={parentNode.id}>
                    <Link className="text-white text-sm" href={parentNode.path}>
                      {parentNode.label}
                    </Link>
                  </li>
                );
              } else {
                // Render a dropdown if there are children
                return (
                  <Dropdown
                    key={parentNode.id}
                    engagement={children} // Pass the children here
                    resources={children}
                    title={parentNode.label}
                  />
                );
              }
            })}
      </ul>
    </div>
  );
}
