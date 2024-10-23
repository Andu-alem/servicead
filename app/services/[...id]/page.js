import Header from '../../components/Header'
import Profile from '../../components/Profile'
import Description from '../../components/Description'
import Posts from '../../components/Post'


export default async function MyService({params}) {
    const { id } = params
    const data = await fetch(`${process.env.URL}/api/services/${id[0]}`, {cache: 'no-store'})
    const { services } = await data.json()
    const { address, image, servicename, catagory, focusarea, description } = services
    

    return (
        <div className="min-h-screen">
            <Header servicename={servicename} />
            <div className="sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-14 sm:flex md:justify-between">
                <div className="w-[96%] mx-auto sm:w-[47%] shadow-full shadow-lg min-h-[70vh]">
                    <Profile image={image} address={address} catagory={catagory} />
                </div>
                <div className="w-[96%] mx-auto sm:w-[52%]">
                    <Description description={description} servicename={servicename} />
                    {
                        Array.from(Array(10)).map((_, index) => {
                            return (
                                <div key={ index }>
                                    <Posts />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>       
    )
}