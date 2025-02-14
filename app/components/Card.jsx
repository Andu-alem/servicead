import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '@heroicons/react/24/solid/StarIcon';
import Rating from './Rating';

export default function Card({ service }) {
    const { serviceName, category, serviceType, _id, address, profileImage } = service;
    const { mimeType, data } = profileImage;
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
    
    return (
        <div className="border border-gray-200 bg-white text-[14px] shadow-lg rounded-b-lg mx-1 my-1 md:my-3 w-[225px]">
            <div className="h-max w-[225px] relative">
                <h1 className="text-[15px] text-gray-900 capitalize font-semibold py-3 px-1 h-[75px] border-b border-zinc-300">{ serviceName }-{ category.name } </h1>
                <div className="absolute w-[96%] h-[120px] mx-[4px]">
                    <Image className="mx-auto" fill={true} src={`data:${mimeType};base64,${base64String}`} alt="profile-pic"/>
                </div>
                <div className="text-zinc-900 mt-[130px] min-h-[50px] px-3"> 
                    <p className="">
                        { category.name } <br/>
                        { address.city } -- { address.uniqueaddress }
                    </p>
                </div>
                <div className="text-gray-700 mt-1 px-3 pb-2 pt-2 flex justify-between items-center border-t border-gray-300 rounded-b-lg">
                    <Rating />
                    <button className="text-sky-700 font-semibold px-2 rounded-lg p-1 hover:bg-sky-400 hover:text-white">
                        <Link href={`/services/${_id}`} >See Detail</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}