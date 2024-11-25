import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '@heroicons/react/24/solid/StarIcon';

export default function Card({ service }) {
    const { image, focusarea, servicename, catagory, _id, address } = service
    const { type, data } = image
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))
    
    return (
        <div className="border border-gray-200 text-[14px] shadow-lg rounded-b-lg mx-1 my-1 md:my-3 w-[250px]">
            <div className="h-max w-[250px] relative">
                <h1 className="text-[17px] text-gray-700 capitalize font-bold py-3 px-3 h-[75px] border-b border-zinc-300">{ servicename}-{catagory} </h1>
                <div className="absolute w-[96%] h-[150px] mx-[4px]">
                    <Image className="mx-auto" fill={true} src={`data:${type};base64,${base64String}`} alt="profile-pic"/>
                </div>
                <div className="text-zinc-500 mt-[160px] min-h-[50px] px-3"> 
                    <p className="font-medium">
                        { catagory } <br/>
                        { address.city } -- { address.uniqueaddress }
                    </p>
                </div>
                <div className="text-gray-700 mt-1 px-3 pb-2 pt-2 flex justify-between border-t border-gray-300 rounded-b-lg">
                    <span className="flex text-amber-500">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4 text-zinc-300" />
                    </span>
                    <button className="text-sky-700 font-bold px-2 rounded-lg p-1 hover:bg-sky-400 hover:text-white">
                        <Link href={`/services/${_id}`} >See detail..</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}