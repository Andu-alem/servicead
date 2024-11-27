import StarIcon from '@heroicons/react/24/solid/StarIcon';

export default function Rating({ rate=null }) {
    let rating = rate || Math.ceil((Math.random() * 4)+1);//set random rating out of 5 if rate is not proviced
    return (
        <div className="flex">
            {
                Array.from(Array(5)).map((item, index) => {
                    if ((index+1) < rating) {
                        return (
                            <div key={ index } className="text-amber-400">
                                <StarIcon className="w-4 h-4" />
                            </div>
                        )
                    }
                    return (
                        <div key={ index } className="text-zinc-300">
                            <StarIcon className="w-4 h-4" />
                        </div>
                    )
                })
            }
        </div>
    );
}