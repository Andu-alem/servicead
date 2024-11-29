import Image from 'next/image';
import Rating from '../Rating';


export default function ServiceProfileSection ({ service }) {

    if (service === undefined) {
        return;
    }
    
    const { address, profileImage, serviceName, category, serviceType, description } = service
    const { mimeType, data } = profileImage
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))
    return (
        <>
            <div className="text-center text-white mt-10">
                <div className="flex justify-center">
                    <Image 
                        className="rounded-full"
                        src={`data:${mimeType};base64,${base64String}`} 
                        width="110"
                        height="110"
                        alt="profile pic" />
                </div>
                <h1 className="text-2xl text-center capitalize">{ serviceName }</h1>
                <h3 className="text-sm text-slate-500">{ category.name }</h3>
                <div className="flex flex-col items-center p-0">
                    <Rating />
                </div>
                <h4 className="text-orange-300 text-[15px]">The tagline will goes here..</h4>
            </div>
            <div className="text-gray-100 text-sm font-mono text-center my-5">
                <p className="text-[15px] p-2">
                    { description }
                </p>
            </div>
            <div className="text-white text-center text-[15px]">
                <p className="mb-1">
                    Working Hours :
                    <span className="text-slate-400 mx-1">Mon - Str 1:30 am - 2 pm</span>
                </p> 
                <span className="bg-green-700 rounded-lg px-2 text-[15px]">Open</span>
            </div>
            <div className="text-white text-center text-[15px] my-3">
                <p>Addresss - { address.city }</p>
            </div>
            <div className="flex justify-evenly text-[17px] mb-5">
                <button className="bg-sky-700 text-white px-2 rounded-md">Message Us</button>
                <button className="bg-green-700 text-white px-2 rounded-md">Follow Map</button>
            </div>
        </>
    );
}