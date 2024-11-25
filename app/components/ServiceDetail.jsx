import ServiceDescription from "./ServiceDescription";
import Image from 'next/image';

export default function ServiceDetail ({ service, editMode=false }) {
    const { address, image, servicename, catagory, focusarea, description } = service
    const { type, data } = image
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))
    return (
        <>
            <div className="text-center text-white mt-10">
                <div className="flex justify-center">
                    <Image 
                        className="rounded-full"
                        src={`data:${type};base64,${base64String}`} 
                        width="120"
                        height="100"
                        alt="profile pic" />
                </div>
                <h1 className="text-4xl text-center capitalize">{ servicename }</h1>
                <h3 className="text-sm text-slate-500">{ catagory }</h3>
                <span className="text-amber-400 text-xl">
                    ****
                    <span className="text-white">*</span>
                </span>
                <h4 className="text-orange-300">The place where you eat delicious</h4>
            </div>
            <div className="text-gray-100 text-sm font-mono text-center my-5">
                <ServiceDescription editMode={ editMode } description={ description } />
            </div>
            <div className="text-white text-center">
                <p>
                    Working Hours :
                    <span className="text-sm text-slate-400 mx-1">Mon - Str 1:30 am - 2 pm</span>
                </p> 
                <span className="bg-red-700 rounded-lg px-2 text-sm">Closed</span>
            </div>
            <div className="text-white text-center my-3">
                <p>Addresss - { address.city }</p>
            </div>
            <div className="flex justify-evenly mb-5">
                <button className="bg-sky-700 text-white px-2 rounded-md">Message Us</button>
                <button className="bg-green-700 text-white px-2 rounded-md">Follow Map</button>
            </div>
        </>
    );
}