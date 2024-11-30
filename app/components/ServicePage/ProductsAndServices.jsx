'use client'
import { useEffect } from 'react';
import { useServiceContext } from '../../utils/context';
import DisplayFeaturedProducts from './DisplayFeaturedProducts';

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
        <DisplayFeaturedProducts fromMyService={ true } />
    );
}