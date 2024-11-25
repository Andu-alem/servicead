'use client'
import ServicesList from './ServicesList'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { useState } from 'react';

export default function MainBody({ servicesData }) {
    const { services, catagories } = servicesData;
    const [allServices, setAllServices] = useState(services);
    const [allCatagories, setAllCatagories] = useState(catagories);


    const filterService = (filterBy, filterParam) => {
        if (filterBy === 'category') {
            let filterdCat = [];
            filterdCat = catagories.filter((catagory, index) => {
                const cat = catagory.toLowerCase().trim();
                return cat.indexOf(filterParam.toLowerCase()) !== -1;
            });
            setAllCatagories(filterdCat);
        } else { // if filter by name or city selected
            let filterdCatagorizedServices = {}
            let filterdCatagories = []
            for (const catagory in services) {
                if (services.hasOwnProperty(catagory)) {
                    const servicesArray = services[catagory];
                    const filterd = servicesArray.filter((service) => {
                        if (filterBy == 'name') {
                            const name = service.servicename.toLowerCase();
                            return name.indexOf(filterParam.toLowerCase()) !== -1;
                        }
                        const city = service.address.city.toLowerCase();
                        return city.indexOf(filterParam.toLowerCase()) !== -1;
                    });

                    if (filterd.length > 0) {
                        filterdCatagorizedServices[catagory] = filterd;
                        filterdCatagories.push(catagory);
                    }
                    
                }
            }
            setAllCatagories(filterdCatagories);
            setAllServices(filterdCatagorizedServices);
        }
    }

    return (
        <div className="w-[96%] mx-auto mt-[70px] md:flex md:justify-evenly">
            <div className="md:w-2/12">
                <LeftSideBar filterService={ filterService } catagories={ catagories } />
            </div>
            <div className="sm:w-10/12 md:w-8/12 mx-auto">
                <ServicesList catagories={ allCatagories } services={ allServices } />
            </div>
            <div className="w-2/12">
                <RightSideBar />
            </div>
        </div>
    );
}