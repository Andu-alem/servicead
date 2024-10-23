import Image from 'next/image'
import Link from 'next/link'


export default function Card({ service }) {
    const { image, servicename, catagory, _id } = service
    const { type, data } = image
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))
    
    return (
        <div className="border border-gray-200 shadow-lg rounded-b-lg mx-1 my-1 md:my-3 w-[250px]">
            <div className="h-max w-[250px] relative">
                <h1 className="text-sm text-gray-700 capitalize font-bold py-3 px-3 h-[75px]">{ servicename}-{catagory} </h1>
                <div className="absolute w-[96%] h-[150px] mx-[4px]">
                    <Image className="mx-auto" fill={true} src={`data:${type};base64,${base64String}`} alt="profile-pic"/>
                </div>
                <div className="text-gray-700 mt-[160px] px-3">
                    <p>
                        <span className="text-green-500 font-bold">&gt;</span>
                        300 meters away from you
                    </p>
                </div>
                <div className="text-gray-700 mt-1 px-1 pb-3 pt-2 flex justify-around border border-t border-gray-300 rounded-b-lg">
                    <button className="text-sky-700 text-sm font-bold rounded-lg p-1 hover:bg-sky-400 hover:text-white">
                        Follow Map
                    </button>
                    <button className="text-sky-700 text-sm font-bold rounded-lg p-1 hover:bg-sky-400 hover:text-white">
                        <Link href={`/services/${_id}`} >More..</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}