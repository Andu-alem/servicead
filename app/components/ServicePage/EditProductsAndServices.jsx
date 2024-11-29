'use client'
import { useServiceContext } from '../../utils/context';


export default function EditProductsAndServices ({ index }) {
    const { state, dispatch } = useServiceContext();
    const productAndService = state.productAndServices[index];
    const { title, description } = productAndService;
    const placeHolder = 'Write something about the particular service or product in detail. It should not exceed 500 characters';
    const titleChange = (e) => {
        dispatch({
            type: "AddProductTitle",
            payload: {
                index: index,
                title: e.target.value,
            }
        });
    }
    const descriptionChange = (e) => {
        dispatch({
            type: "AddProductDetail",
            payload: {
                index: index,
                description: e.target.value,
            }
        });
    }

    return (
        <div className="p-2 flex flex-col items-center text-center text-[15px] w-full sm:w-[31%] lg:w-1/4">
            <textarea 
                className="text-lg mb-2 font-medium resize-none border border-slate-500 p-0 text-center bg-blue-100"
                placeholder={ title === "" || title === undefined ? "Title...":title }
                cols="18"
                rows="2"
                maxLength="40"
                onChange={ titleChange }
            />
            <textarea
                className="-mt-1 border border-slate-500 text-center bg-blue-100 resize-none text-sm text-zinc-700"
                rows="10"
                cols="25"
                resizable="false"
                maxLength="500"
                placeholder={ description === "" || description === undefined ? placeHolder : description }
                onChange={ descriptionChange }
            />
        </div>
    );
}