import Image from "next/image";
import React from "react";
import Nav from "./Nav/Nav";
import Button from "./Button";
import Link from "next/link";
import MobileNav from "./Nav/MobileNav";
import Client from "../utils/Client";

export default async function Header() {
  const query = `
  query getPrimaryMenuItems {
    menuItems(where: {location: PRIMARY}, first: 100) {
      nodes {
        id
        path
        label
        parentId
        description
      }
    }
  }
`;
  const data = await Client(query);
  return (
    <header className="sticky z-10 top-0 w-full h-20 px-6 text-white shadow-lg bg-gray lg:px-0">
      <div className="flex justify-between h-full py-2 mx-auto max-w-7xl lg:px-8">
        <Link href="/" className="my-auto">
          <Image
            src="/newcustomers.svg"
            alt="Logo"
            width="240"
            height="36"
            className="h-10 my-auto"
          />
        </Link>
        <div className="hidden lg:block">
          <Nav data={data.menuItems.nodes} />
        </div>
        <div className="hidden gap-3 my-auto lg:flex">
          <Button href="/om-oss/" type="transparent" text="Om oss" />
          <Button href="/kontakt/" type="primary" text="Kontakt" />
        </div>
        <MobileNav data={data.menuItems.nodes} />
      </div>
    </header>
  );
}
