"use client";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";

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

export default function MobileNav({ data }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex lg:hidden">
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="my-auto">
              <Image
                src="/newcustomers.svg"
                alt="Logo"
                width="240"
                height="36"
                className="h-10 my-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div className="-my-5 divide-y divide-gray-500/10">
              <ul className="space-y-2 py-6 list-none">
                {data.filter &&
                  data
                    .filter((node: ChildItem) => node.parentId === null)
                    .map((parentNode: ChildItem) => {
                      // Find children of this parent node
                      const children = data.filter(
                        (childNode: ChildItem) =>
                          childNode.parentId === parentNode.id
                      );
                      // Check if the parent node has children
                      if (children.length === 0) {
                        // Render a link if no children
                        return (
                          <li className="mb-0" key={parentNode.id}>
                            <Link
                              onClick={() => setMobileMenuOpen(false)}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:text-white hover:bg-gray-600"
                              href={parentNode.path}
                            >
                              {parentNode.label}
                            </Link>
                          </li>
                        );
                      } else {
                        // Render a dropdown if there are children
                        return (
                          <Disclosure
                            key={parentNode.id}
                            as="div"
                            className="-mx-3"
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-white hover:bg-gray-600">
                                  {parentNode.label}
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? "rotate-180" : "",
                                      "h-5 w-5 flex-none"
                                    )}
                                    aria-hidden="true"
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="mt-2 space-y-2">
                                  {children.map((item: any, index: number) => (
                                    <Disclosure.Button key={index} as="div">
                                      <Link
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-white hover:text-white block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 hover:bg-gray-600"
                                        href={item.path}
                                      >
                                        {item.label}
                                      </Link>
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        );
                      }
                    })}
              </ul>
              <div className="gap-3 lg:hidden flex justify-center">
                <Link
                  className="bg-primary px-5 py-2 rounded-2xl text-black hover:text-black"
                  href="/kontakt/"
                  type="transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
                <Link
                  className="bg-white px-5 py-2 rounded-2xl text-black hover:text-black"
                  href="/om-oss/"
                  type="transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Om oss
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
