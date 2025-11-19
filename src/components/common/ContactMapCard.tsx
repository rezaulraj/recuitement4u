// import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

type ContactMapProps = {
  title: string;
  address: string;
  // phone: string;
  // email: string;
  hours: string;
  mapEmbedUrl: string;
  mapLink?: string;
};

export default function ContactMapCard({
  title,
  address,
  // phone,
  // email,
  hours,
  mapEmbedUrl,
  mapLink,
}: ContactMapProps) {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start w-full p-4 md:p-10">
      {/* Map */}
      <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"></iframe>
      </div>

      {/* Info */}
      <div className="space-y-4 text-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          {mapLink && (
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:underline text-sm font-medium">
              <FaArrowRight className="text-black" />
              Look on the map
            </a>
          )}
        </div>

        <p>{address}</p>
        <hr />
        <div className="flex flex-col gap-1 text-sm">
          {/* <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-black" />
            <a href={`tel:${phone}`} className="text-black hover:underline">
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-black" />
            <a href={`mailto:${email}`} className="text-black hover:underline">
              {email}
            </a>
          </div> */}
          <div className="flex items-center gap-2">
            <MdAccessTime className="text-black" />
            <span>
              <strong>Working hours:</strong> {hours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
