'use client';

import Image from "next/image";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Digital Marketing <br /> that Delivers Results
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          From social media strategies to performance marketing and SEO — Adya Digital crafts powerful digital campaigns that grow your brand and boost ROI.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="Marketing Campaign 1"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt="Marketing Campaign 2"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt="Marketing Campaign 3"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="Ad Design"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt="Social Media Post"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt="SEO Strategy"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt="Campaign Analysis"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt="Lead Generation"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt="Google Ads"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt="Client Success Story"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt="Marketing Funnel"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt="Facebook Campaign"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
