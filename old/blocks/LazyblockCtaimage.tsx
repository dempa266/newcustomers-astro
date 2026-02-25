import Image from "next/image";
import LazyImage from "../components/LazyImage";
import Link from "next/link";
import BlockRender from "../components/BlockRender";

type Props = {
  data: {
    title: string;
    image: string;
    buttontext: string;
    buttonlink: string;
  };
};

export default function LazyblockCtaimage(props: Props) {
  return (
    <section>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid lg:grid-cols-2 py-6 overflow-hidden text-white bg-gray rounded-xl">
          <div className="flex -mt-5 lg:-my-5">
            {props.data.image && <LazyImage image={props.data.image} />}
          </div>
          <div className="flex flex-col justify-center space-y-6 text-white lg:px-24">
            <div className="text-2xl text-center mt-5">{props.data.title}</div>
            <Link
              href={props.data.buttonlink}
              className="flex px-4 py-2 mx-auto text-sm leading-6 text-white border group rounded-2xl border-light hover:bg-primary hover:text-white"
            >
              {props.data.buttontext}
              <div className="w-3 h-3 my-auto ml-2 rounded-full bg-primary group-hover:bg-white "></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const LazyblockCtaimageFragment = `
... on LazyblockCtaimage {
    apiVersion
    blockEditorCategoryName
    attributes {
        title
        image
        buttontext
        buttonlink
    }
}
`;
