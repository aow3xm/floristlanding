import {Facebook, Instagram, Twitter} from "lucide-react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className='mt-20'>
            <div className="flex flex-col justify-center items-center gap-5 bg-green-950 p-10 text-white">
                <h1 className="font-semibold text-3xl">Feel free to contact us</h1>
                <div className="flex gap-10">
                    <div className='w-14 h-14 border rounded-full text flex justify-center items-center'>
                        <Facebook/>
                    </div>
                    <div className='w-14 h-14 border rounded-full text flex justify-center items-center'>
                        <Instagram/>
                    </div>

                    <div className='w-14 h-14 border rounded-full text flex justify-center items-center'>

                        <Twitter/>
                    </div>
                </div>
                <div className="space-x-14">
                    <Link href='/home'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/delivery'>Delivery</Link>
                    <Link href='/plants'>Plants</Link>
                    <Link href='/blog'>Blog</Link>

                </div>
            </div>
        </footer>

    )
}