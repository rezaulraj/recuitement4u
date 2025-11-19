import Image from "next/image";
import { StaticImageData } from "next/image";
interface BlogHeaderCardProps {
  category: string;
  date: string;
  title: string;
  authorName: string;
  authorImg: StaticImageData | string;
  coverImg: StaticImageData | string;
}

export default function BlogHeaderCard({
  category,
  date,
  title,
  authorName,
  authorImg,
  coverImg,
}: BlogHeaderCardProps) {
  return (
    <section className="bg-[#e9f8f6] w-screen ml-[-10vw] px-6 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left content */}
        <div>
          <button className="bg-green-500 text-primary text-sm px-3 py-1 rounded-full mb-2">
            {category}
          </button>
          <p className="text-sm text-primary mb-4">Published: {date}</p>
          <h1 className="text-2xl text-primary md:text-4xl font-bold mb-6">
            {title}
          </h1>

          <div className="flex items-center space-x-3">
            <Image
              src={authorImg}
              alt={authorName}
              width={50}
              height={50}
              className="w-16 h-16 rounded-full"
            />
            <span className="text-sm font-medium">{authorName}</span>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src={coverImg}
            alt="Cover"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
