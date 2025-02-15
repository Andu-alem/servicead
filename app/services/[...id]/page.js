import Header from '../../components/ServicePage/Header'
import ServiceImage from '../../components/ServicePage/ServiceImage';
import ServiceProfileSection from '../../components/ServicePage/ServiceProfileSection';
import Offerings from '../../components/ServicePage/Offerings';
import ClientReview from '../../components/ServicePage/ClientReview';
import LeaveReview from '../../components/LeaveReview';
import DisplayFeaturedProducts from '../../components/ServicePage/DisplayFeaturedProducts';



export default async function Service({params}) {
    const { id } = params;
    const data = await fetch(`${process.env.URL}/api/services/${id[0]}`, {cache: 'no-store'});
    const { service } = await data.json();
    const { profileImage, productsAndServices, images, offering } = service;

    return (
        <div className="min-h-screen">
            <Header />
            <div className="min-h-[94vh] w-full lg:w-[94%] mx-auto mt-14 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[78vh] mt-10">
                        <ServiceImage profileImage={ profileImage } images={ images } />
                    </div>
                    <div className="w-full sm:w-[55%] mt-[5vh]">
                        <ServiceProfileSection service={ service } />
                    </div>
            </div>
            <div className="min-h-[94vh] p-2 flex flex-col items-center mx-auto py-12 sm:py-10 bg-gray-100">
                <DisplayFeaturedProducts productsAndServices={ productsAndServices } />  
            </div>
            <div className="mx-auto min-h-[94vh] flex flex-col sm:flex-row sm:justify-evenly">
                <div className="w-full sm:w-5/12 pt-10 px-2 sm:border-r border-zinc-500">
                    <h2 className="text-xl mb-2 font-bold text-center">Our Offerings</h2>
                    <Offerings fetchedOffering={ offering } />
                </div>
                <div className="w-full sm:w-5/12 pt-10 px-2 text-[15px]">
                    <h2 className="text-xl mb-2 font-bold text-center">Client Reviews</h2>
                    <div>
                            {
                                Array.from(Array(3)).map((_, index) => (
                                    <ClientReview key={ index } profileImage={ profileImage } />
                                ))
                            }   
                            <LeaveReview />
                    </div>
                </div>
            </div>
        </div>       
    )
}