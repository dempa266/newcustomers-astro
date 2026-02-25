import Image from "next/image";
import LazyImage from "../components/LazyImage";

type Props = {
  data: {
    logos: any;
  };
};

type Logo = {
  text: string;
  url: string;
  icon: any;
};

export default function LazyblockLogos(props: Props) {
  const logos = JSON.parse(decodeURIComponent(props.data.logos));
  return (
    <section className="flex items-center justify-between px-6 mx-auto max-w-7xl lg:px-8">
      <div
        className={`grid w-full gap-10 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 bg-gray p-6 rounded-2xl`}
      >
        {logos.map((logo: Logo, index: number) => {
          return (
            <div key={index} className="mx-auto flex">
              {logo.icon.url && (
                <Image
                  className="w-24 my-auto"
                  src={logo.icon.url}
                  alt="Logo"
                  width="256"
                  height="256"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const LazyblockLogosFragment = `
  ... on LazyblockLogos {
      apiVersion
      blockEditorCategoryName
      attributes {
        logos
      }
  }
  `;
