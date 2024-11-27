import Image from 'next/image';
import Rating from '../Rating';

export default function ClientReview ({ profileImage }) {
    const { mimeType, data } = profileImage;
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
    return (
        <div className="bg-gray-50 border border-zinc-300 text-[15px] rounded-lg p-3 my-2">
            <div className="flex mb-1"> 
                <Image 
                    className="rounded-full"
                    src={`data:${mimeType};base64,${base64String}`} 
                    width="40"
                    height="40"
                    alt="profile pic"
                />
                <div className="mx-3">
                    <h3 className="font-bold">John Doe Mendel</h3>
                    <Rating />
                </div>
                <span className="text-green-500 text-[12px] font-bold">
                        Trusted User
                </span>
            </div>
            <p className="px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti, consequatur voluptas reiciendis 
            </p>
        </div>
    );
}