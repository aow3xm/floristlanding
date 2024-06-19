import Image, {ImageProps} from 'next/image';

interface UserCardProps {
    image: ImageProps['src'];
    name: string;
    feedback: string;
}

export default function UserCard({image, name, feedback}: Readonly<UserCardProps>) {
    return (
        <div className="bg-white p-12 rounded-lg border border-gray-200">
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image src={image} alt={name} layout="fill" objectFit="cover"/>
                    </div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                </div>
                <div>
                    <p style={{fontFamily: 'var(--font-raleway)'}} className="text-gray-500">{feedback}</p>
                </div>
            </div>
        </div>
    )
}
