'use client'
import { useState } from 'react';

export default function ProductAndService ({ index , editMode=false, setProductAndService, productAndService }) {
    const placeHolder = 'Write something about the particular service or product in detail. It should not exceed 500 characters';
    const titleChange = (e) => {
        setProductAndService({
            ...productAndService,
            [index] : {
                title: e.target.value,
                description: productAndService[index] ? productAndService[index].description: ''
            }
        });
    }
    const descriptionChange = (e) => {
        setProductAndService({
            ...productAndService,
            [index] : {
                title: productAndService[index] ? productAndService[index].title:'',
                description: e.target.value
            }
        });
    }

    return (
        <div className="p-2 text-center text-[15px] w-full sm:w-[30%] lg:w-1/4">
            {
                editMode ?
                    ( 
                        <>
                            <textarea 
                                className="text-lg mb-2 font-medium resize-none border border-slate-300 p-0 text-center bg-blue-100"
                                placeholder="Title...."
                                cols="17"
                                rows="2"
                                maxLength="40"
                                onChange={ titleChange }
                            />
                            <textarea
                                className="-mt-2 border boreder-slate-300 text-center bg-blue-100 resize-none text-sm text-zinc-700"
                                rows="10"
                                cols="25"
                                resizable="false"
                                maxLength="500"
                                placeholder={ placeHolder }
                                onChange={ descriptionChange }
                            />
                        </>
                    ) : (
                        <>
                            <h3 className="text-lg mb-2 font-medium">Some Title</h3>
                            <p className="text-zinc-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere eaque maiores, sint perspiciatis, blanditiis nihil voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere eaque maiores, sint perspiciatis, blanditiis nihil voluptate?
                            </p>
                        </>
                    )
            }
        </div>
    );
}