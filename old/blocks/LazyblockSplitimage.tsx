import Image from "next/image";
import LazyImage from "../components/LazyImage";
import Link from "next/link";
import BlockRender from "../components/BlockRender";

type Props = {
  data: {
    title: string;
    description: string;
    image: string;
  };
  innerBlocks: any[];
};

export default function LazyblockSplitimage(props: Props) {
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
          <div className="lg:mr-20">
            <BlockRender
              blocksArray={props.innerBlocks}
              showInnerBlocks={true}
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <LazyImage image={props.data.image} alt={props.data.title} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const LazyblockSplitimageFragment = `
... on LazyblockSplitimage {
    apiVersion
    blockEditorCategoryName
    attributes {
        title
        description
        image
    }
    innerBlocks {
        renderedHtml
    }
}
`;
