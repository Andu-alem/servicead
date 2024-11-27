
export default function Offerings ({ editMode=false, setOffering }) {
    const offering = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae eaque iure cum autem, deleniti magni unde officiis fugit, esse, nisi animi tempora maxime ipsum ullam quas molestiae iusto alias?";
    return (
        <div className="mx-10 text-[15px]">
            {
                editMode ? (
                    <textarea 
                        className="w-full border border-slate-300 resize-none bg-gray-100"
                        rows="15" 
                        placeholder={ offering }
                        onChange={ (e) => setOffering(e.target.value) }
                    />
                ) : (
                    <p>{ offering }</p>
                )
            }
        </div>
    );
}