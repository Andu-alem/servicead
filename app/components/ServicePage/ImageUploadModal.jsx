'use client'
import { useState, useEffect } from 'react';
import Modal from './Modal';

export default function ImageUploadModal ({ showModal, setShowModal, setUploadedImages, fetchedImages, setDeletedImages, deletedImages }) {
    const [imageSources, setImageSources] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);


    useEffect(() => {
        if (fetchedImages.length > 0) {
            const images = Array.from(fetchedImages);
            setImageSources(images);
        }
    },[]);
    const handleChange = (e) => {
        const files = e.target.files;
        const blobs = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            blobs.push(URL.createObjectURL(file))
        }
        setImageFiles(files);
        setImageSources([...imageSources, ...blobs]);
        setButtonDisabled(false);
    }
    const removeImage = (index, id='') => {
        if (id !== '') {
            //allowes user to choose the image they want to delete from the server
            setDeletedImages([...deletedImages, id]);
            setButtonDisabled(false);
        }
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
    const sourceGenerator = (image) => {
        //to generate base4 from binary string
        const { mimeType, data } = image;
        const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
        const source = `data:${mimeType};base64,${base64String}`;

        return source;
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
                                {
                                    src._id === undefined ? (
                                        <>
                                            <img className="" src={ src } key={ i } alt="img"/>
                                            <span 
                                                className="flex justify-center text-[13px] text-white bg-zinc-700 cursor-pointer"
                                                onClick={ () => removeImage(i) }
                                            >Remove</span>
                                        </>
                                    ) : (
                                        <>
                                            <img className="" src={ sourceGenerator(src) } key={ i } alt="img"/>
                                            <span 
                                                className="flex justify-center text-[13px] text-white bg-red-700 cursor-pointer"
                                                onClick={ () => removeImage(i, src._id) }
                                            >Delete</span>
                                        </>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-2 text-[15px]">
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
                        disabled={ buttonDisabled }
                    >Set Changes</button>
                </div>
            </div>
        </Modal>
    );
}