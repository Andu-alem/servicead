import Header from '../../components/Header'
import Profile from '../../components/Profile'
import Description from '../../components/Description'
import Posts from '../../components/Post'
import ServiceImage from './../../components/ServiceImag';
import ServiceDetail from './../../components/ServiceDetail';
import ProductAndService from '../../components/ProductsAndServices';
import Offerings from './../../components/Offerings';
import ClientReview from './../../components/ClientReview';


export default async function MyService({ service }) {
    const { address, image, servicename, catagory, focusarea, description } = service
    
    return (
        <div className="min-h-screen">
            <Header servicename={servicename} fromMyservice={ true } />
            <div className="min-h-[94vh] mx-auto bg-zinc-950 flex flex-col-reverse sm:flex-row sm:justify-evenly">
                    <div className="sm:w-[45%] h-[80vh] mt-10">
                        <ServiceImage image={ image } />
                    </div>
                    <div className="w-full sm:w-[45%] mt-[5vh]">
                        <ServiceDetail service={ service } />
                    </div>
            </div>
            <div className="min-h-[94vh] mx-auto bg-blue-100 px-5 py-12 sm:py-7 sm:p-14">
                <h1 className="text-2xl text-center font-bold">Services & Products</h1>
                <div className="flex flex-col sm:flex-row justify-evenly mt-2 sm:mt-5">
                    {
                        Array.from(Array(3)).map((_, index) => (
                            <ProductAndService key={ index } />
                        ))
                    }
                </div>
            </div>
            <div className="mx-auto min-h-[94vh] flex flex-col sm:flex-row sm:justify-evenly bg-gray-100">
                <div className="w-full sm:w-5/12 pt-10 px-2 sm:border-r border-zinc-500">
                    <h2 className="text-2xl mb-2 font-bold text-center">Our Offerings</h2>
                    <Offerings />
                </div>
                <div className="w-full sm:w-5/12 pt-10 px-2 text-sm">
                    <h2 className="text-2xl mb-2 font-bold text-center">Client Reviews</h2>
                    <div>
                            {
                                Array.from(Array(3)).map((_, index) => (
                                    <ClientReview key={ index } image={ image } />
                                ))
                            }   
                    </div>
                </div>
            </div>
        </div>       
    )
}