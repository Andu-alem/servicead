'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BrandLogo from '../BrandLogo';
import { useServiceContext } from '../../utils/context';


export default function Header({ uploadChanges=()=>{}, fromMyservice=false, afterRegistration=false }) {
    const router = useRouter();    
    const { state, dispatch } = useServiceContext();
    const editMode = state.pageEditMode || state.profileEditMode;

    const setEditMode = (mode, isProfileEdit=false) => {
        if (isProfileEdit) {
            dispatch({
                type: "ToggleProfileEditMode",
                payload: {
                    isProfileEditMode: true,
                }
            })
        } else {
            if (!mode) {
                dispatch({
                    type: "TogglePageEditMode",
                    payload: {
                        isPageEditMode: false,
                    }
                });
                dispatch({
                    type: "ToggleProfileEditMode",
                    payload: {
                        isProfileEditMode: false,
                    }
                });
            } else {
                dispatch({
                    type: "TogglePageEditMode",
                    payload: {
                        isPageEditMode: true,
                    }
                });
            }
        }
    }
  
    return (
        <div className="fixed w-full top-0 backdrop-blur-2xl shadow-lg z-50">       
            <div className="block sm:flex justify-around border-b-2 border-gray-300 shadow-sm py-2 shadow-b shadow-lg">
                <div className="flex justify-between w-full">
                    <div className="w-7/12">
                        <BrandLogo onClick={() => afterRegistration ? router.replace("/") : router.back()} />
                    </div>
                    <div className="w-4/12">
                        {
                            fromMyservice && (
                                <div className="font-bold text-[15px] text-zinc-700 pt-[3px] cursor-pointer">
                                    {
                                        editMode ? (
                                            <div className="flex justify-evenly items-center px-2">
                                                <button 
                                                    className="rounded-md mt-2 py-1 px-2 sm:px-5 text-zinc-700 hover:text-blue-500"
                                                    onClick={ () => setEditMode(false) }
                                                >Cancel</button>
                                                <button 
                                                    className={`${ state.uploadPending ? 'animate-pulse': 'animate-none' } bg-blue-700 px-2 sm:px-5 rounded-md mt-2 py-1 text-white hover:bg-opacity-75`}
                                                    onClick={ () => {
                                                        uploadChanges();
                                                        !state.uploadPending && setEditMode(false);
                                                    }}
                                                >Save</button>
                                            </div>
                                        ):(
                                            <div className="flex justify-evenly items-center px-2">
                                                <button 
                                                    className="bg-blue-700 px-2 sm:px-5 rounded-md mt-2 py-1 text-white hover:bg-opacity-75"
                                                    onClick={ () => setEditMode(true) }
                                                >Edit Page</button>
                                                <button 
                                                    className="bg-blue-700 px-2 sm:px-5 rounded-md mt-2 py-1 text-white hover:bg-opacity-75"
                                                    onClick={ () => setEditMode(true, true)}
                                                >Edit Profile</button>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}