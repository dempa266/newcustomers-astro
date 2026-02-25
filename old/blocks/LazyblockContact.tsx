import ContactFormInclude from "../components/ContactFormInclude";
import LazyImage from "../components/LazyImage";

type Props = {
  data: {
    preTitle: string;
    title: string;
    description: string;
    image: string;
    content: string;
  };
};

export default function LazyblockContact(props: Props) {
  return (
    <section className="px-5 mx-auto max-w-7xl lg:px-10 bg-gray text-white rounded-2xl py-20">
      <div className="lg:flex justify-between">
        <div className="max-w-lg my-auto space-y-2">
          {props.data.preTitle && (
            <div className="text-base font-medium text-primary uppercase">
              {props.data.preTitle}
            </div>
          )}
          {props.data.title && (
            <h2 className="text-4xl  mt-0">{props.data.title}</h2>
          )}
          {props.data.description && (
            <div className="text-gray-300">{props.data.description}</div>
          )}
          <ContactFormInclude />
        </div>
        <div className="flex justify-between space-x-5 my-auto">
          {props.data.image && (
            <div className="max-w-xl h-64 w-64 flex overflow-hidden rounded-2xl">
              <LazyImage image={props.data.image} />
            </div>
          )}
          <div
            className="textOnDark"
            dangerouslySetInnerHTML={{ __html: props.data.content }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export const LazyblockContactFragment = `
  ... on LazyblockContact {
      apiVersion
      blockEditorCategoryName
      attributes {
        preTitle
        title
        description
        image
        content 
      }
  }
  `;
