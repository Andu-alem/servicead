import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

export default function DataList(props) {
    const { label, name } = props
    const { register, setValue, formState: { errors } } = useFormContext()
    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const optionsList = ["Mechanic/Garage", "Bar and Restaurant", "Coffee House", "NGO", "Clinic", "Hospital", "Food and Drink"]
    const [options, setOptions] = useState(optionsList)
    useEffect(() => {
        setOptions(optionsList.filter((option) => {
            return option.toLowerCase().indexOf(inputValue.toLowerCase()) != -1
        }))
        setValue("category", inputValue)
    },[inputValue])
    const changeHandler = (e) => {
        const { value } = e.target
        setInputValue(value)
        register(name).onChange(e)
    }
    const selectHandler = (e, option) => {
        //const { key } = e.target
        setInputValue(option)
        setShow(false)
        e.target.value = option
        register(name).onChange(e)
    }
    const List = () => {
        return (
            <ul className="absolute mt-14 border p-3 w-[300px] sm:w-[350px] min-h-[50px] overflow-auto bg-white">
                {
                    options.map((option, index) => {
                        return (
                            <div key={ index } className="cursor-pointer hover:bg-zinc-100" onClick={ (e) => selectHandler(e, option) }>
                                <li className="m-1 text-sm">{ option }</li>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
    return (
        <div className="my-1 flex flex-col text-[15px]">
            <label className="text-zinc-700 font-medium">{ label }</label>
            <input 
                type="text" 
                className="border-2 border-gray-300 focus:border-gray-100 p-1 rounded-lg w-[270px] sm:w-[300px] my-1 sm:mx-2"
                name={ name }
                { ...register(name) }
                onChange={ changeHandler }
                value={ inputValue } 
                onFocus={ () => setShow(true) }
                />
            { errors[name] && <p className="text-sm text-red-700">{ errors[name].message }</p> }
            { show && options.length > 0 && <List />}
        </div>
    )
}