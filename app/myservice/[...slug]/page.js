import { getServerSession } from 'next-auth';
import MyServiceMain from '../../components/ServicePage/MyServiceMain';


const getData = async (email) => {
    const serviceData = await fetch(`${process.env.URL}/api/services/myservice-${email}`, {cache: 'no-store'})
    const { service } = await serviceData.json()

    return service
}

export default async function Page() {
    const { user } = await getServerSession()
    if (!user) {
        return (
            <div>
                Loading
            </div>
        )
    }
    const email = user.email
    const service = await getData(email)
    return (
        <div className="min-h-screen">
            <MyServiceMain service={ service } afterRegistration={ true } />
        </div>       
    )
}