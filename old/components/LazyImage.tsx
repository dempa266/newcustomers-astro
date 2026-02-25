import Image from "next/image";

export default function LazyImage({ image }: any) {
  const imageObject = JSON.parse(decodeURIComponent(image));

  const width = imageObject.sizes.full?.width || 640;
  const height = imageObject.sizes.full?.height || 480;

  return (
    <Image
      className="object-cover"
      width={width}
      height={height}
      src={imageObject.url}
      alt={imageObject.alt}
    />
  );
}
