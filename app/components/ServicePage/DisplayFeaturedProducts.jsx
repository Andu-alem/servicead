'use client'
import EditProductsAndServices from './EditProductsAndServices';
import { useServiceContext } from '../../utils/context';


export default function DisplayFeaturedProducts ({ productsAndServices=[], fromMyService=false }) {
    const { state } = useServiceContext();
    const displayedFeatures = fromMyService ? state.productAndServices : productsAndServices;

    return (
        <div className="p-2 flex flex-col items-center">
            <h1 className="text-xl text-center font-bold mt-5">Featured Services & Products</h1>
            <div className="w-full flex flex-col sm:flex-row justify-center sm:flex-wrap mt-10 sm:mt-5">
                <div className={`p-2 w-full flex flex-col sm:flex-row justify-evenly items-center ${ state.pageEditMode && 'border border-slate-400' }`}>
                    {
                        state.pageEditMode && fromMyService ?
                            ( 
                                Array.from(Array(3)).map((_, index) => (
                                    <EditProductsAndServices key={index} index={ index } />
                                ))
                            ) : displayedFeatures.length > 0 ? (
                                <>
                                    {
                                        displayedFeatures.map((product, index) => {
                                            return (
                                                <div className="text-center text-[15px] mx-2 p-1" key={ index }>
                                                    <h3 className="text-lg mb-2 font-medium">{ product.title }</h3>
                                                    <p className="text-zinc-700">
                                                        { product.description }
                                                    </p>
                                                </div>
                                            );
                                        })
                                    }
                                </>
                            ) : (
                                ["Delivery", "Money Back", "Prizes on sell"].map((title, index) => (
                                <div className="text-center text-[15px] mx-2 p-1" key={ index }>
                                    <h3 className="text-lg mb-2 font-medium">{ title }</h3>
                                    <p className="text-zinc-700">
                                    A detailed description about this featured service here. It should not exceed 500 characters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Write a detailed description about this featured service here. It should not exceed 500 characters incididunt ut labore et dollaboris nisi ut  anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et  laboris nisi ut sed do eiusmod
                                    </p>
                                </div>
                            ))
                            )
                    }
                </div>
            </div>
        </div>
    );
}