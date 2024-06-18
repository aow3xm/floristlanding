import {CirclePlay} from "lucide-react";
import Image from "next/image";
import {HeroImage, IndoorSVG, OutdoorSVG, CactusSVG, HouseSVG, PlantSVG, ScissorSVG, WaterSVG} from "../../public";

export default function Home() {
    return (
        <main className="space-y-20">
            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section className="h-screen relative">
                <Image
                    // style={{ filter: "blur(5px)" }}
                    draggable={false}
                    src={HeroImage}
                    layout="fill"
                    objectFit="cover"
                    alt="Hero"
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:left-2/3 lg:-translate-x-2/3 -translate-y-1/2 text-white space-y-3">
                    <h1 className="text-4xl lg:text-6xl font-semibold">
                        Nature&apos;s Beauty Delivered to You
                    </h1>
                    <p
                        style={{fontFamily: "var(--font-raleway)"}}
                        className="text-md lg:text-lg tracking-normal lg:tracking-wide"
                    >
                        Nature&apos;s beauty is just a click away with our online flower and
                        plant shop. We offer a wide variety of flowers that will bring a
                        touch of nature to your home!
                    </p>
                    <div className="flex gap-5 flex-col lg:flex-row font-semibold">
                        <button
                            className="bg-green-900 hover:bg-green-950 hover:-translate-y-1 duration-100 px-10 py-2 rounded">
                            Book Now
                        </button>
                        <button
                            className="hover:-translate-y-1 duration-100 px-10 py-2 border rounded flex flex-row gap-2 justify-center items-center">
                            <CirclePlay/>
                            Watch Video
                        </button>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------------------------- */}


            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section className="container mx-auto flex flex-col lg:flex-row justify-between gap-5">
                <div
                    className="h-full lg:h-96 w-full lg:w-1/3 bg-white p-10 border rounded-xl drop-shadow-md space-y-5 text-green-900">
                    <Image src={IndoorSVG} alt="indoor" width={75} height={75}/>
                    <h3 className="text-2xl font-bold">Indoor Plants</h3>
                    <p className="lg:text-lg">
                        Bring the beauty of nature to your outdoor spaces with our wide
                        selection of outdoor plants
                    </p>
                </div>
                <div
                    className="h-full lg:h-96 w-full lg:w-1/3 bg-green-700 text-white p-10 border rounded-xl drop-shadow-md space-y-5 ">
                    <Image src={OutdoorSVG} alt="indoor" width={75} height={75}/>
                    <h3 className="text-2xl font-bold">Outdoor Plants</h3>
                    <p className="lg:text-lg">
                        Bring a touch of greenery to your living spaces with our collection
                        of indoor plants, perfect for purifying the air and adding a natural
                        touch to your home.
                    </p>
                </div>
                <div
                    className="h-full lg:h-96 w-full lg:w-1/3 bg-white p-10 border rounded-xl drop-shadow-md space-y-5 text-green-900">
                    <Image src={CactusSVG} alt="indoor" width={75} height={75}/>
                    <h3 className="text-2xl font-bold">Plants Pots</h3>
                    <p className="lg:text-lg">
                        Add a touch of style to your indoor or outdoor spaces with our
                        collection of pots plants, available in a variety of sizes and
                        designs to fit any decor
                    </p>
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------------------------- */}


            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section className='container mx-auto space-y-10'>
                <h1 className='text-4xl font-bold text-center text-green-900 tracking-tight'>What We Offer To You</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item}
                             className="flex flex-col border rounded-lg overflow-hidden cursor-pointer hover:shadow-md duration-200">
                            <div>
                                <Image src='/hero.jpg' alt='hero' height={350} width={350} objectFit="cover"/>
                            </div>
                            <div
                                className='flex justify-between flex-wrap items-center gap-3 p-5 text-green-900 font-semibold'>
                                <div className="flex flex-col">
                                    <p className=' text-sm lg:text-base'>Cactus Plant</p>
                                    <p className='text-sm'>$8</p>
                                </div>
                                <button
                                    className='border border-green-900 rounded px-5 py-1 lg:py-2 hover:bg-green-900 hover:text-white duration-200'>Buy
                                    Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------------------------- */}

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section className='flex flex-col lg:flex-row flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <Image src='/hero.jpg' alt='hero' height={1000} width={1000} objectFit='cover' className='h-full'/>
                </div>
                <div className='w-full lg:w-1/2 grid grid-cols-2'>
                    <div className='flex flex-col gap-3 p-5 lg:p-20 h-full text-green-900'>
                        <Image src={PlantSVG} alt='plant' height={75} width={75}/>
                        <h3 className='text-xl lg:text-2xl font-bold'>Quality Product</h3>
                        <p className='text-sm lg:text-base' style={{fontFamily: 'var(--font-raleway)'}}>Our flowers are
                            of the highest quality, carefully
                            selected and sourced from reputable sources.</p>
                    </div>
                    <div className='flex flex-col gap-3 p-5 lg:p-20 bg-gray-50 h-full text-green-900'>
                        <Image src={WaterSVG} alt='plant' height={75} width={75}/>
                        <h3 className='text-xl lg:text-2xl font-bold'>Always Fresh</h3>
                        <p className='text-sm lg:text-base' style={{fontFamily: 'var(--font-raleway)'}}>Our flowers are
                            always fresh, handpicked and
                            delivered promptly for maximum longevity and enjoyment.</p>
                    </div>
                    <div className='flex flex-col gap-3 p-5 lg:p-20 bg-gray-50 h-full text-green-900'>
                        <Image src={HouseSVG} alt='plant' height={75} width={75}/>
                        <h3 className='text-xl lg:text-2xl font-bold'>Work Smart</h3>
                        <p className='text-sm lg:text-base' style={{fontFamily: 'var(--font-raleway)'}}>We work smart,
                            using innovative techniques and
                            technology to streamline our processes.</p>
                    </div>
                    <div className='flex flex-col gap-3 p-5 lg:p-20 h-full text-green-900'>
                        <Image src={ScissorSVG} alt='plant' height={75} width={75}/>
                        <h3 className='text-xl lg:text-2xl font-bold'>Excellent Service</h3>
                        <p className='text-sm lg:text-base' style={{fontFamily: 'var(--font-raleway)'}}>We pride
                            ourselves on providing excellent
                            service, going above and beyond to meet our customers&apos; needs.</p>
                    </div>
                </div>
            </section>


            {/* -------------------------------------------------------------------------------------------------------------------- */}


            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section>

            </section>
            {/* -------------------------------------------------------------------------------------------------------------------- */}

        </main>
    );
}
