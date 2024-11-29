import { redirect } from 'next/navigation';
import NavigationBar from './components/NavigationBar';
import MainBody from './components/ServicesMainBody';



export default async function Services() {
    const data = await fetch(`${process.env.URL}/api/services`, {cache: 'no-store'});
    const { categories } = await data.json();
    
    if (!categories) {
        redirect("/auth/signup");
    }
    return (
        <div>
            <NavigationBar />
            <MainBody categories={ categories } />
        </div>
    )
}