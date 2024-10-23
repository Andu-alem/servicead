import Image from 'next/image'

export default function Profile({ image, address, catagory }) {
    const { type, data } = image
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''))
    return (
        <div className="sm:fixed p-3 w-full sm:w-[37%] md:w-[35%] h-[86vh] overflow-auto scrollbar-hide">
            <div className="absolute -z-50 w-[90%] mx-auto min-h-[300px]">
                <Image src={`data:${type};base64,${base64String}`} fill={ true } sizes="30%" alt="profile pic" />
            </div>
            <div className="mt-[300px]">
                <h1 className="text-xl font-bold bg-gradient-to-r from-zinc-700 via-zinc-500 via-orange-300 to-orange-500 text-transparent inline-block bg-clip-text">{ catagory }</h1>
                <div className="mx-2 font-medium text-sm text-zinc-700">
                    <h3 className="">Address: { address.city } - { address.uniqueaddress }</h3>
                    <h3>Call us: 44444444444</h3>
                    <p>Lorem ipsum dolor sit amet quos ad iure enim.</p>
                </div>
            </div>
        </div>
    )
}