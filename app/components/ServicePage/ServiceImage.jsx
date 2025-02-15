'use client'
import DisplayImage from './DisplayImage';
import DisplayImageInEdit from './DisplayImageInEdit';
import { useServiceContext } from '../../utils/context';


export default function ServiceImage ({ profileImage, images=[] }) {
    const { mimeType, data } = profileImage;
    const base64String = btoa( new Uint8Array(data.data).reduce((chunk, byte) => chunk + String.fromCharCode(byte), ''));
    const src = `data:${mimeType};base64,${base64String}`;
    const { state } = useServiceContext();


    return (
        <div className="h-[95%] w-10/12 mx-auto mt-4">
            {
                state.pageEditMode ? (
                    <DisplayImageInEdit src={ src } profileImageId={ profileImage._id } images={ images }/>
                ) : (
                    <DisplayImage src={ src } images={ images } />
                )
            }
        </div>
    );
}