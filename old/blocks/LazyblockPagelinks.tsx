import Image from "next/image";
import LazyImage from "../components/LazyImage";
import Link from "next/link";

type Props = {
  data: {
    links: any;
  };
};

type Link = {
  text: string;
  url: string;
  icon: any;
};

export default function LazyblockPagelinks(props: Props) {
  const links = JSON.parse(decodeURIComponent(props.data.links));
  return (
    <section className="flex items-center justify-between px-6 mx-auto max-w-7xl lg:px-8">
      <div className="grid w-full gap-10 lg:grid-cols-3">
        {links.map((link: Link, index: number) => {
          return (
            <Link
              href={link.url ?? "#kontakt"}
              className="flex p-5 cursor-pointer group bg-gray-light text-gray hover:bg-gray hover:text-white rounded-2xl"
              key={index}
            >
              <div className="shrink-0">
                {link.icon.url && (
                  <Image
                    className="w-16 h-16 mr-5 group-hover:invert group-hover:contrast-200 group-hover:grayscale"
                    src={link.icon.url}
                    alt="Logo"
                    width="256"
                    height="256"
                  />
                )}
              </div>
              <p className="my-auto group-hover:text-white">{link.text}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export const LazyblockPagelinksFragment = `
  ... on LazyblockPagelinks {
      apiVersion
      blockEditorCategoryName
      attributes {
        links
      }
  }
  `;
