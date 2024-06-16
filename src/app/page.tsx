import { CirclePlay } from "lucide-react";
import Image from "next/image";
import { HeroImage, IndoorSVG, OutdoorSVG, CactusSVG } from "../../public";
export default function Home() {
  return (
    <main className="space-y-20">
      <div className="h-screen relative">
        <Image
          // style={{ filter: "blur(5px)" }}
          draggable={false}
          src={HeroImage}
          layout="fill"
          objectFit="cover"
          alt="Hero"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:left-2/3 lg:-translate-x-2/3 -translate-y-1/2 text-white space-y-3">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Nature&apos;s Beauty Delivered to You
          </h1>
          <p
            style={{ fontFamily: "var(--font-raleway)" }}
            className="text-md lg:text-lg tracking-normal lg:tracking-wide"
          >
            Nature&apos;s beauty is just a click away with our online flower and
            plant shop. We offer a wide variety of flowers that will bring a
            touch of nature to your home!
          </p>
          <div className="flex gap-5 flex-col lg:flex-row font-semibold">
            <button className="bg-green-900 hover:bg-green-950 hover:-translate-y-1 duration-100 px-10 py-2 rounded">
              Book Now
            </button>
            <button className="hover:-translate-y-1 duration-100 px-10 py-2 border rounded flex flex-row gap-2 justify-center">
              <CirclePlay />
              Watch Video
            </button>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-evenly gap-5 lg:gap-0">
        <div className="h-full lg:h-96 w-full lg:w-96 bg-white p-10 border rounded-xl drop-shadow-md space-y-5 text-green-900">
          <Image src={IndoorSVG} alt="indoor" width={75} height={75} />
          <h3 className="text-2xl font-bold">Indoor Plants</h3>
          <p className="lg:text-lg">
            Bring the beauty of nature to your outdoor spaces with our wide
            selection of outdoor plants
          </p>
        </div>
        <div className="h-full lg:h-96 w-full lg:w-96 bg-green-700 text-white p-10 border rounded-xl drop-shadow-md space-y-5 ">
          <Image src={OutdoorSVG} alt="indoor" width={75} height={75} />
          <h3 className="text-2xl font-bold">Outdoor Plants</h3>
          <p className="lg:text-lg">
            Bring a touch of greenery to your living spaces with our collection
            of indoor plants, perfect for purifying the air and adding a natural
            touch to your home.
          </p>
        </div>
        <div className="h-full lg:h-96 w-full lg:w-96 bg-white p-10 border rounded-xl drop-shadow-md space-y-5 text-green-900">
          <Image src={CactusSVG} alt="indoor" width={75} height={75} />
          <h3 className="text-2xl font-bold">Plants Pots</h3>
          <p className="lg:text-lg">
            Add a touch of style to your indoor or outdoor spaces with our
            collection of pots plants, available in a variety of sizes and
            designs to fit any decor
          </p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------- */}
    </main>
  );
}
