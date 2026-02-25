import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import LazyImage from "../components/LazyImage";

type Props = {
  data: {
    preTitle: string;
    title: string;
    description: string;
    image: string;
    features: any;
  };
};

type Feature = {
  title: string;
};

export default function LazyblockFeatures(props: Props) {
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
        {props.data.image && (
          <div className="relative max-w-xl h-96 w-full flex overflow-hidden rounded-2xl my-10 lg:my-0">
            <LazyImage image={props.data.image} />
          </div>
        )}
      </div>
      <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-3 mt-10">
        {features.map((feature: Feature, index: number) => {
          return (
            <div
              key={index}
              className="items-center bg-gray-light rounded-2xl p-6"
            >
              <div className="text-gray font-medium flex">
                <CheckCircleIcon className="w-6 h-6 text-primary" />
                <div className="ml-6">{feature.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const LazyblockFeaturesFragment = `
  ... on LazyblockFeatures {
      apiVersion
      blockEditorCategoryName
      attributes {
        preTitle
        title
        description
        image
        features
      }
  }
  `;
