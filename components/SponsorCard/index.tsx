import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle";

interface SponsorCardProps {
  index: number;
  sponsor: string;
  category: string;
  sponsorimgsrc: StaticImageData;
  site: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  index,
  sponsor,
  category,
  sponsorimgsrc,
  site,
}) => {
  // card colors depends on the category of the sponsor
  const defaultBgColor = "#262626";
  const defaultTextColor = "#BBBBBB";
  const sponsorColor: {
    [key in SponsorCardProps["category"]]: {
      bgColor: string;
      textColor: string;
    };
  } = {
    "Gold Sponsor": {
      bgColor: "#4E3E1D",
      textColor: "#FFDC96",
    },
    "Silver Sponsor": {
      bgColor: "#3A3A3A",
      textColor: "#BBBBBB",
    },
    "Bronze Sponsor": {
      bgColor: "#463026",
      textColor: "#E49977",
    },
    "Platform Partner": {
      bgColor: "#483869",
      textColor: "#C1A5FF",
    },
  };

  const bgColor = sponsorColor[category]?.bgColor ?? defaultBgColor;
  const textColor = sponsorColor[category]?.textColor ?? defaultTextColor;

  return (
    <>
      <AnimatedTitle delay={0.2} viewport={true}>
        <Link href={site} target="_blank" rel="noreferrer" key={index} className="flex justify-center">
          <div className={`w-full font-gotham text-white ${index % 3 == 0 ? "hover:-rotate-3" : "hover:rotate-3"} hover:scale-105 transition-all ease-in-out duration-500 max-w-[350px] md:w-[310px] lg:w-[330px] xl:w-[355px]`}>
            <Image
              src={sponsorimgsrc}
              className="w-full h-[181px] xl:h-[216px] rounded-t-[20px] outline-none object-cover"
              placeholder="blur"
              alt={sponsor}
            />
            <div
              className="flex justify-between items-start p-[22px] rounded-b-[20px]"
              style={{ backgroundColor: bgColor }}
            >
              <div className="flex flex-col">
                <p className="sm:text-[28px] text-xl font-black">{sponsor}</p>
                <p
                  className="sm:text-[18px] text-xl leading-9 font-bold"
                  style={{ color: textColor }}
                >
                  {category}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </AnimatedTitle>
    </>
  );
};

export default SponsorCard;
