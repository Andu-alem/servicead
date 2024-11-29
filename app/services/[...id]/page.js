import Header from '../../components/ServicePage/Header'
import ServiceImage from '../../components/ServicePage/ServiceImage';
import ServiceProfileSection from '../../components/ServicePage/ServiceProfileSection';
import ProductAndService from '../../components/ServicePage/ProductsAndServices';
import Offerings from '../../components/ServicePage/Offerings';
import ClientReview from '../../components/ServicePage/ClientReview';


export default async function Service({params}) {
    const { id } = params;
    const data = await fetch(`${process.env.URL}/api/services/${id[0]}`, {cache: 'no-store'});
    const { service } = await data.json();
    const { profileImage, productsAndServices, images, offering } = service;
    console.log("Services --- ", service);

    return (
        <div className="min-h-screen">
            <Header />
            <div className="min-h-[94vh] mx-auto mt-14 bg-zinc-950 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[80vh] mt-10">
                        <ServiceImage profileImage={ profileImage } images={ images } />
                    </div>
                    <div className="w-full sm:w-[45%] mt-[5vh]">
                        <ServiceProfileSection service={ service } />
                    </div>
            </div>
            <div className="min-h-[94vh] p-2 flex flex-col items-center mx-auto bg-blue-100 px-5 py-12 sm:py-10 sm:p-14">
                <h1 className="text-xl text-center font-bold mt-5">Featured Services & Products</h1>
                <div className="w-full flex flex-col sm:flex-row justify-center sm:flex-wrap mt-10 sm:mt-5">
                    <div className="p-1 w-full flex flex-col sm:flex-row justify-evenly items-center">   
                        {
                            productsAndServices.length > 0 ? 
                                productsAndServices.map((product, index) => {
                                    return (
                                        <div key={ index }>
                                            <h3 className="text-lg mb-2 font-medium">{ product.title }</h3>
                                            <p className="text-zinc-700">
                                                { product.description }
                                            </p>
                                        </div>
                                    );
                                })
                            : 
                            Array.from(Array(3)).map((_, index) => (
                                <div className="text= center text-[15px]" key={ index }>
                                    <h3 className="text-lg mb-2 font-medium">Delivery</h3>
                                    <p className="text-zinc-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et  laboris nisi ut  anim id est laborum.
                                    </p>
                                </div>
                            ))
                        }     
                    </div>
                </div>    
            </div>
            <div className="mx-auto min-h-[94vh] flex flex-col sm:flex-row sm:justify-evenly bg-gray-100">
                <div className="w-full sm:w-5/12 pt-10 px-2 sm:border-r border-zinc-500">
                    <h2 className="text-xl mb-2 font-bold text-center">Our Offerings</h2>
                    <Offerings fetchedOffering={ offering } />
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