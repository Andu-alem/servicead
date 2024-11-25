import { getServerSession } from 'next-auth';
import MyService from '../components/ServiceBody';


const getData = async (email) => {
    const serviceData = await fetch(`${process.env.URL}/api/services/myservice-${email}`, {cache: 'no-store'})
    const { services } = await serviceData.json()

    return services
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
    const services = await getData(email)
    return (
        <div className="min-h-screen">
            <MyService service={ services } afterRegistration={ true } />
        </div>       
    )
}