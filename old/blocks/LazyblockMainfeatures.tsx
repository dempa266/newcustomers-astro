import Image from "next/image";
import Button from "../components/Button";

type Props = {
  data: {
    preTitle: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    features: any;
  };
};

type Feature = {
  image: any;
  title: string;
  description: string;
};

export default function LazyblockMainfeatures(props: Props) {
  const features = JSON.parse(decodeURIComponent(props.data.features));
  return (
    <section className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="lg:flex justify-between">
        <div className="max-w-lg my-auto space-y-2">
          {props.data.preTitle && (
            <div className="text-base font-medium text-primary uppercase">
              {props.data.preTitle}
            </div>
          )}
          {props.data.title && (
            <h2 className="text-4xl text-gray mt-0">{props.data.title}</h2>
          )}
          {props.data.description && (
            <div className="text-gray-500">{props.data.description}</div>
          )}
        </div>
        {props.data.buttonText && (
          <div className="max-w-sm mt-10 lg:my-auto">
            <Button
              type="primary"
              href={props.data.buttonLink}
              text={props.data.buttonText}
            />
          </div>
        )}
      </div>
      <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-3 mt-10">
        {features.map((feature: Feature, index: number) => {
          return (
            <div key={index} className="text-center flex flex-col items-center">
              {feature.image.url && (
                <div className="relative w-full h-64 flex overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image.url}
                    alt={feature.title}
                    className="object-cover"
                    width={1024}
                    height={1024}
                  />
                </div>
              )}
              <h3 className="text-gray mt-4 text-2xl">{feature.title}</h3>
              <p className="text-gray-500 max-w-xs">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const LazyblockMainfeaturesFragment = `
  ... on LazyblockMainfeatures {
      apiVersion
      blockEditorCategoryName
      attributes {
        preTitle
        title
        description
        buttonText
        buttonLink
        features
      }
  }
  `;
