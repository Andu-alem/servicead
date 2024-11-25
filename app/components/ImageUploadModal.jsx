'use client'
import { useState } from 'react';
import Modal from './Modal';

export default function ImageUploadModal ({ showModal, setShowModal, setUploadedImages }) {
    const [imageSources, setImageSources] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const handleChange = (e) => {
        const files = e.target.files;
        const blobs = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            blobs.push(URL.createObjectURL(file))
        }
        setImageFiles(files);
        setImageSources(blobs);
    }
    const removeImage = (index) => {
        setImageSources(
            imageSources.filter((image, i) => i !== index)
        );
    }
    const onClose = () => {
        setShowModal(false);
    }
    const onSetChoosen = () => {
        setUploadedImages(imageFiles);
        setShowModal(false);
    }

    return (
        <Modal show={ showModal }>
            <div className="flex justify-end">
                <span 
                    className="px-10 font-bold pt-2 text-xl cursor-pointer"
                    onClick={ onClose }
                >X</span>
            </div>
            <div className="h-[60vh] py-2 px-10">
                <div className="h-[90%] border border-zinc-500 flex justify-evenly flex-wrap overflow-auto">
                    {
                        imageSources.map((src, i) => (
                            <div key={ i } className="w-32 h-32 md:w-40 md:h-50 m-1">
                                <img className="" src={ src } key={ i } alt="img"/>
                                <span 
                                    className="flex justify-center text-[13px] text-white bg-zinc-700 cursor-pointer"
                                    onClick={ () => removeImage(i) }
                                >Remove</span>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-2 text-sm">
                    <label 
                        htmlFor="file-upload"
                        className="bg-zinc-900 rounded-lg px-3 py-1 font-medium text-white cursor-pointer"
                    >Choose Images</label>
                    <input type="file"
                        className="hidden"
                        id="file-upload"
                        multiple
                        accept="image/*"
                        onChange={ handleChange }
                    />
                    <button 
                        className={`${ imageFiles.length < 1 ? 'opacity-50':'opacity-100' } bg-zinc-900 rounded-lg px-3 py-1 font-medium text-white cursor-pointer ml-3`}
                        onClick={ onSetChoosen }
                        disabled={ imageFiles < 1 }
                    >Set Choosen</button>
                </div>
            </div>
        </Modal>
    );
}