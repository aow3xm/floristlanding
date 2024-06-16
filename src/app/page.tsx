import { CirclePlay } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen relative">
        <Image
          style={{ filter: "blur(5px)" }}
          draggable={false}
          src="/hero.jpg"
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
      <div className="">Contact</div>
    </main>
  );
}
