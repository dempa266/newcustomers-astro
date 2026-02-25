import React from "react";
import Image from "next/image";

export default function LazyblockBanner() {
  return (
    <section>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-6 py-6 text-white lg:grid-cols-5 bg-gray rounded-xl">
          <div className="flex flex-col">
            <div className="w-12 h-12 mx-auto">
              <Image src="/google.png" width={100} height={100} alt="" />
            </div>
            <div className="flex mx-auto mt-2">
              <Image src="/star.svg" width={15} height={15} alt="" />
              <Image src="/star.svg" width={15} height={15} alt="" />
              <Image src="/star.svg" width={15} height={15} alt="" />
              <Image src="/star.svg" width={15} height={15} alt="" />
              <Image src="/star.svg" width={15} height={15} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center text-xl text-center">
            <div className="text-2xl">35+</div>
            <div className="text-lg text-gray-300">Kunder</div>
          </div>
          <div className="flex flex-col justify-center text-xl text-center">
            <div className="text-2xl">12</div>
            <div className="text-lg text-gray-300">Specialister</div>
          </div>
          <div className="flex flex-col justify-center text-xl text-center">
            <div className="text-2xl">2021</div>
            <div className="text-lg text-gray-300">Grundat</div>
          </div>
          <div className="flex flex-col ">
            <div className="w-12 h-12 mx-auto">
              <Image src="/google.png" width={100} height={100} alt="" />
            </div>
            <div className="flex mx-auto mt-1">
              <div className="flex flex-col justify-center text-center">
                <div>Google Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const LazyblockBannerFragment = `
... on LazyblockBanner {
    apiVersion
    blockEditorCategoryName
}
`;
