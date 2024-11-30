import Image from 'next/image';

export default function BrandLogo({ onClick=()=>{} }) {
    return (
        <div className="flex flex-row text-sm font-bold w-[11/12] sm:w-3/4 px-7 md:px-[50px] cursor-pointer " onClick={ onClick }>
            <Image src="/logo.png" width={50} height={50} alt="logo" priority={ true } />
            <h1 className="bg-gradient-to-r mt-4 from-sky-700 via-sky-300 to-sky-100 inline-block text-transparent bg-clip-text underline">
                Service<span className="text-zinc-500">Ad</span> 
            </h1>
        </div>
    );
}