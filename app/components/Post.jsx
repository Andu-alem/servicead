
export default function Post() {
    const date = new Date(Date.now())
    return (
        <div className="shadow-lg p-3 my-2">
            <h2 className="font-medium text-sky-700 mb-1">Postd at { date.toLocaleString() } </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores provident pariatur veniam sapiente dolores ipsam explicabo, molestias aliquam eveniet nisi architecto reiciendis, odit ea, ullam mollitia eaque! Quae, sunt!
            </p>
        </div>
    )
}