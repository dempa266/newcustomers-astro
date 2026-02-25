import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import LazyImage from "../components/LazyImage";
import { headers } from "next/headers";

type Props = {
  data: {
    title: string;
    description: string;
    image: string;
    video: string;
  };
  seo: any;
};
export default function LazyblockHeropage(props: Props) {
  const breadcrumbs = props.seo?.breadcrumbs || [];
  const isHomePage = breadcrumbs.length <= 1;

  return (
    <section>
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:gap-24 lg:grid-cols-2 text-gray">
          <div className="my-auto space-y-4">
            {/* Conditionally render breadcrumbs only if not the homepage */}
            {!isHomePage && <Breadcrumbs breadcrumbs={breadcrumbs} />}

            <h1 className="text-4xl lg:text-5xl">{props.data.title}</h1>
            <p>{props.data.description}</p>
            <div className="flex space-x-4">
              <Button href="/kontakt/" type="primary" text="Kontakt" />
              <Button href="/om-oss/" type="secondary" text="Om oss" />
            </div>
          </div>

          {props.data.image && (
            <div className="flex w-auto overflow-hidden bg-white rounded-2xl h-96">
              <LazyImage image={props.data.image} />
            </div>
          )}

          {props.data.video && (
            <figure className="flex w-full h-full wp-block-video">
              <video
                className="w-full h-full object-fit"
                autoPlay
                loop
                muted
                src={JSON.parse(decodeURIComponent(props.data.video)).url}
                playsInline
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
export const LazyblockHeropageFragment = `
... on LazyblockHeropage {
    apiVersion
    blockEditorCategoryName
    attributes {
      title
      description
      image
      video
    }
}
`;
