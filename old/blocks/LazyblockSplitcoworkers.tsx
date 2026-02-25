import LazyImage from "../components/LazyImage";
import BlockRender from "../components/BlockRender";
import Image from "next/image";

type Props = {
  data: {
    title: string;
    description: string;
    coworkers: any;
  };
  innerBlocks: any[];
};

export default function LazyblockSplitcoworkers(props: Props) {
  const coworkers = JSON.parse(decodeURIComponent(props.data.coworkers));
  return (
    <section className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="flex flex-col bg-gray-light rounded-2xl">
        <h2 className="mx-auto mt-20 text-4xl text-gray text-center">
          {props.data.title}
        </h2>
        {props.data.description && (
          <p className="mx-auto mt-5 text-lg text-gray">
            {props.data.description}
          </p>
        )}
        <div className="grid gap-10 p-10 lg:grid-cols-2 lg:p-20">
          <div className="lg:mr-20 my-auto">
            <BlockRender
              blocksArray={props.innerBlocks}
              showInnerBlocks={true}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            {coworkers.map((coworker: any, index: number) => {
              return (
                <div
                  className={`grid lg:h-1/2 h-auto sm:grid-cols-2 items-center justify-center w-full bg-gray overflow-hidden  ${
                    index === 0 ? "rounded-t-2xl" : "rounded-b-2xl"
                  }`}
                  key={index}
                >
                  <div className="flex w-full h-full">
                    <Image
                      src={coworker.image.url}
                      width={320}
                      height={240}
                      alt={coworker.title}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="col-span-1 flex flex-col w-full h-full text-left my-auto p-6">
                      <div className="text-white font-medium">
                        {coworker.name}
                      </div>
                      <p className=" font-light text-gray-300">
                        {coworker.title}
                      </p>
                      <a
                        href={"tel:" + coworker.phone}
                        className="text-white my-1"
                      >
                        {coworker.phone}
                      </a>
                      <a
                        href={"mailto:" + coworker.email}
                        className="text-white my-1"
                      >
                        {coworker.email}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const LazyblockSplitcoworkersFragment = `
... on LazyblockSplitcoworkers {
    apiVersion
    blockEditorCategoryName
    attributes {
        title
        description
        coworkers
    }
    innerBlocks {
        renderedHtml
    }
}
`;
