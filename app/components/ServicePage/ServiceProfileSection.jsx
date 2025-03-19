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
        <div cassName="text-zinc-900 tracking-wide flex flex-col items-center sm:items-start gap-4">
            <div className="flex flex-col items-center sm:items-start gap-1 text-center text-left mt-10">
                <Image 
                    className="rounded-lg"
                    src={`data:${mimeType};base64,${base64String}`} 
                    width={130}
                    height={130}
                    alt="profile pic" />
                <h1 className="text-2xl text-center sm:text-left font-semibold capitalize">{ serviceName }</h1>
                <h3 className="text-[15px] text-slate-700">Best in the business.</h3>
                <h3 className="text-[15px] text-slate-500">{ category.name }</h3>
                <Rating />
            </div>
            <p className="text-[17px] text-center sm:text-left p-2 sm:px-0">
                { description }
            </p>
            <div className="text-center sm:text-left text-[15px] my-2">
                <p className="mb-3">
                    Working Hours :
                    <span className="text-slate-400 mx-1">Mon - Str 1:30 am - 2 pm</span>
                </p> 
            </div>
            <p className="text-center sm:text-left text-[15px] text-slate-700">Addresss - { address.city }</p>
            <div className="flex justify-evenly sm:justify-start gap-4 text-[17px] my-3">
                <button className="bg-sky-500 text-white px-3 py-1 rounded-md">Message Us</button>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md">Follow Map</button>
            </div>
        </div>
    );
}