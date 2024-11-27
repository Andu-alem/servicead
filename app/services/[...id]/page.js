import Header from '../../components/ServicePage/Header'
import ServiceImage from '../../components/ServicePage/ServiceImage';
import ServiceProfile from '../../components/ServicePage/ServiceProfileSection';
import ProductAndService from '../../components/ServicePage/ProductsAndServices';
import Offerings from '../../components/ServicePage/Offerings';
import ClientReview from '../../components/ServicePage/ClientReview';


export default async function Service({params}) {
    const { id } = params;
    const data = await fetch(`${process.env.URL}/api/services/${id[0]}`, {cache: 'no-store'});
    const { service } = await data.json();
    const { profileImage, serviceName, images } = service;

    return (
        <div className="min-h-screen">
            <Header serviceName={serviceName} />
            <div className="min-h-[94vh] mx-auto mt-10 bg-zinc-950 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[80vh] mt-10">
                        <ServiceImage profileImage={ profileImage } images={ images } />
                    </div>
                    <div className="w-full sm:w-[45%] mt-[5vh]">
                        <ServiceProfile service={ service } />
                    </div>
            </div>
            <div className="min-h-[94vh] mx-auto bg-blue-100 px-5 py-12 sm:py-10 sm:p-14">
                <h1 className="text-xl text-center font-bold">Serivces & Products</h1>
                <div className="flex flex-col sm:flex-row justify-between md:justify-evenly mt-2 sm:mt-5">
                    {
                        Array.from(Array(3)).map((_, index) => (
                            <ProductAndService key={ index } />
                        ))
                    }
                </div>
            </div>
            <div className="mx-auto min-h-[94vh] flex flex-col sm:flex-row sm:justify-evenly bg-gray-100">
                <div className="w-full sm:w-5/12 pt-10 px-2 sm:border-r border-zinc-500">
                    <h2 className="text-xl mb-2 font-bold text-center">Our Offerings</h2>
                    <Offerings />
                </div>
                <div className="w-full sm:w-5/12 pt-10 px-2 text-sm">
                    <h2 className="text-xl mb-2 font-bold text-center">Client Reviews</h2>
                    <div>
                            {
                                Array.from(Array(3)).map((_, index) => (
                                    <ClientReview key={ index } profileImage={ profileImage } />
                                ))
                            }   
                    </div>
                </div>
            </div>
        </div>       
    )
}