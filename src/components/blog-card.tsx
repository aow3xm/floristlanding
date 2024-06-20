import Image, {ImageProps} from "next/image";
import Link from "next/link";

interface BlogCardProps {
    image: ImageProps['src'];
    title: string;
    description: string;
    date: string;
}


export default function BlogCard({image, title, description, date}: Readonly<BlogCardProps>) {
    return (
        <Link className='font-semibold text-green-900' href={`/blog/${title}`}>
            <div className="bg-white space-y-3">
                <div className="relative w-full h-80 overflow-hidden rounded-2xl">
                    <Image src={image} alt={title} className="w-full h-full object-cover"/>
                </div>
                <div style={{fontFamily: 'var(--font-raleway)'}} className='space-y-2'>
                    <h3 className="text-xl text-green-900 font-bold">{title.slice(0, 35)}...</h3>
                    <p className="font-normal text-gray-500">{description.slice(0, 200)}...</p>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500">{date}</p>
                        <button className='font-semibold text-green-900'>Read More →</button>
                    </div>
                </div>

            </div>
        </Link>

    )
}