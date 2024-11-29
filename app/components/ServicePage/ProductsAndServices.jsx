'use client'
import { useEffect } from 'react';
import { useServiceContext } from '../../utils/context';
import EditProductsAndServices from './EditProductsAndServices';

export default function ProductAndService ({ productsAndServices }) {
    const { state, dispatch } = useServiceContext();

    useEffect(() => {
        productsAndServices.forEach((item, index) => {
            dispatch({
                type: "AddProductTitle",
                payload: {
                    index: index,
                    title: item.title,
                }
            });
            dispatch({
                type: "AddProductDetail",
                payload: {
                    index: index,
                    description: item.description,
                }
            });
        });
    },[]);

    return (
        <div className="p-2 flex flex-col items-center">
            <h1 className="text-xl text-center font-bold mt-5">Featured Services & Products</h1>
            <div className="w-full flex flex-col sm:flex-row justify-center sm:flex-wrap mt-10 sm:mt-5">
                <div className={`p-2 w-full flex flex-col sm:flex-row justify-evenly items-center ${ state.pageEditMode && 'border border-slate-400' }`}>
                    {
                        state.pageEditMode ?
                            ( 
                                Array.from(Array(3)).map((_, index) => (
                                    <EditProductsAndServices key={index} index={ index } />
                                ))
                            ) : productsAndServices.length > 0 ? (
                                <>
                                    {
                                        state.productAndServices.map((product, index) => {
                                            return (
                                                <div key={ index }>
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
                                Array.from(Array(3)).map((_, index) => (
                                <div className="text-center text-[15px]" key={ index }>
                                    <h3 className="text-lg mb-2 font-medium">Some Title</h3>
                                    <p className="text-zinc-700">
                                    Write a detailed description about this featured service here. It should not exceed 500 characters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dollaboris nisi ut  anim id est laborum.
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