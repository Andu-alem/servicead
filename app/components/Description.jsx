
export default function Description({ description, servicename }) {
    return (
        <div className="shadow-lg p-4">
            <h2 className="font-medium text-amber-700 mb-1 capitalize">{ servicename }</h2>
            <p>{ description }</p>
        </div>
    )
}