import Image from "next/image";
import LazyImage from "../components/LazyImage";
import Link from "next/link";

type Props = {
  data: {
    coworkers: any;
  };
};

type Coworker = {
  image: any;
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
};

export default function LazyblockCoworkers(props: Props) {
  const coworkers = JSON.parse(decodeURIComponent(props.data.coworkers));
  return (
    <section className="flex items-center justify-between px-6 mx-auto max-w-4xl lg:px-8">
      <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coworkers.map((coworker: Coworker, index: number) => {
          return (
            <div
              className="relative w-64 flex flex-col z-0 mx-auto"
              key={index}
            >
              {coworker.image && (
                <div className="h-64 flex">
                  <Image
                    className="mx-auto object-cover w-full sm:h-full rounded-2xl"
                    src={coworker.image.url}
                    width={640}
                    height={480}
                    alt={coworker.name}
                  />
                </div>
              )}
              <div className="font-medium text-lg mt-3">{coworker.name}</div>
              {coworker.title && (
                <div className="text-sm font-light text-gray mb-1">
                  {coworker.title}
                </div>
              )}
              {coworker.phone && (
                <Link
                  href={"tel:" + coworker.phone}
                  className="text-base  text-gray my-1"
                >
                  {coworker.phone}
                </Link>
              )}
              {coworker.email && (
                <Link
                  href={"mailto:" + coworker.email}
                  className="text-base  text-gray my-1"
                >
                  {coworker.email}
                </Link>
              )}
              {coworker.linkedin && (
                <Link href={coworker.linkedin}>
                  <Image
                    className="w-6 h-6 absolute bottom-0 right-0"
                    src="https://wp.newcustomers.se/wp-content/uploads/2024/01/61109.png"
                    width={100}
                    height={100}
                    alt="linkedin"
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const LazyblockCoworkersFragment = `
  ... on LazyblockCoworkers {
      apiVersion
      blockEditorCategoryName
      attributes {
        coworkers
      }
  }
  `;
