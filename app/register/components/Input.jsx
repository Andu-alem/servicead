import { useFormContext } from "react-hook-form";


export function InputField(props) {
    const { label, name, type } = props
    const { register, formState: { errors } } = useFormContext()
    
    return (
        <div className="my-1 flex flex-col text-sm">
            <label className="text-zinc-700 font-medium md:mx-2">{ label }</label>
            <input 
                className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-1 sm:mx-2" 
                type={ type }
                name={ name }
                { ...register(name) }
            />
            { errors[name] && <p className="text-sm text-red-700">{ errors[name].message }</p> }
        </div>
    )
}

export function TextArea(props) {
    const { label, name, type } = props
    const { register, formState: { errors } } = useFormContext()
    return (
        <div className="my-1 flex flex-col text-sm">
            <label className="text-zinc-700 font-medium mx-2">{ label }</label>
            <textarea 
                name={ name }
                className="border-2 border-gray-300 w-[270px] sm:w-[400px] h-[150px] rounded-lg p-2 my-1 sm:mx-2 resize-none"
                maxLength="700"
                { ...register(name) }
            />    
            { errors[name] && <p className="text-sm text-red-700">{ errors[name].message }</p> }
        </div>
    )
}

export function SelectField(props) {
    const { label, name, type } = props
    const { register, formState: { errors } } = useFormContext()
    const options = [
        "Small Business",
        "Health Care Serice",
        "Food and Drink",
        "Governmental Service/Office",
        "NGO",
        "Sport and Entertaiment",
        "Relegional",
        "Hotelling",
        "Transport"
    ]
    return (
        <div className="my-1 flex flex-col text-zinc-700 text-sm">
            <label className="font-medium my-1">{ label }</label>
            <select
                name={ name }
                className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[300px] mx-2" 
                { ...register(name) }
            >
                <option className="rounded-lg border-gray-400" value=""></option>
                {
                    options.map((option, index) => {
                        return (
                            <option key={ index } value={`${option}`}>{ option }</option>
                        )
                    })
                }
            </select>
            { errors[name] && <p className="text-sm text-red-700">{ errors[name].message }</p> }
        </div>
    )
}