import Image from "next/image";

type Props = {
  data: {
    testimonials: any;
  };
};

export default function LazyblockTestimonials(props: Props) {
  const testimonials = JSON.parse(decodeURIComponent(props.data.testimonials));
  return (
    <section>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 text-dark">
          {testimonials.map((testimonial: any, i: number) => (
            <div
              key={i}
              className="flex flex-col space-y-12 bg-gray-light rounded-xl overflow-hidden"
            >
              <Image
                className="w-full"
                src={testimonial.image?.url}
                alt={testimonial.image?.alt}
                width={800}
                height={400}
              />
              <p className="leading-relaxed px-6 lg:px-12 text-lg text-center text-gray-800">
                {testimonial.text}
              </p>
              <Image
                className="w-48 h-auto mx-auto pb-12"
                src={testimonial.logo?.url}
                alt={testimonial.logo?.alt}
                width="200"
                height="200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const LazyblockTestimonialsFragment = `
... on LazyblockTestimonials {
    apiVersion
    blockEditorCategoryName
    attributes {
        testimonials
    }
}
`;
