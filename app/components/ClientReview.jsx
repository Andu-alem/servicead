import Image from 'next/image';

export default function ClientReview ({ image }) {
    const { type, data } = image
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))
    return (
        <div className="bg-gray-50 border border-zinc-300 rounded-lg p-3 my-2">
            <div className="flex mb-1"> 
                    <Image 
                        className="rounded-full"
                        src={`data:${type};base64,${base64String}`} 
                        width="45"
                        height="45"
                        alt="profile pic" />
                <div className="mx-3">
                    <h3 className="font-bold">John Doe Mendel</h3>
                    <span className="text-sky-400 font-bold">
                        ***
                        <span className="text-zinc-500">**</span>
                    </span>
                </div>
                <span className="text-green-500 font-bold">
                        Trusted User
                </span>
            </div>
            <p className="px-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deleniti, consequatur voluptas reiciendis 
            </p>
        </div>
    );
}