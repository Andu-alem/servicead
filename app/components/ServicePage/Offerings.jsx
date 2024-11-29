'use client'
import { useServiceContext } from '../../utils/context';

export default function Offerings ({ fetchedOffering }) {
    const { state, dispatch } = useServiceContext();
    const offering = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae eaque iure cum autem, deleniti magni unde officiis fugit, esse, nisi animi tempora maxime ipsum ullam quas molestiae iusto alias?";
    
    return (
        <div className="mx-10 text-[15px]">
            {
                state.pageEditMode ? (
                    <textarea 
                        className="w-full border border-slate-500 resize-none bg-gray-100"
                        rows="15" 
                        placeholder={ fetchedOffering !== "" ? fetchedOffering : offering }
                        onChange={ (e) => dispatch({
                            type: "AddOffering",
                            payload: {
                                offering: e.target.value,
                            }
                        }) }
                    />
                ) : (
                    <p>{ fetchedOffering !== "" || fetchedOffering === undefined ? fetchedOffering : offering }</p>
                )
            }
        </div>
    );
}