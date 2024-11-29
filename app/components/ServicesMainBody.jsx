'use client'
import { useState } from 'react';
import ServicesList from './ServicesList'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

export default function MainBody({ categories }) {
    const [allCategories, setAllCategories] = useState(categories);


    const filterService = (filterBy, filterParam) => {
        if (filterBy === 'category') {
            let filterdCategory = [];
            filterdCategory = categories.filter((category, index) => {
                const cat = category.name.toLowerCase().trim();
                return cat.indexOf(filterParam.toLowerCase()) !== -1;
            });
            setAllCategories(filterdCategory);
        } else { // if filter by name or city selected
            let filterdCategories = [];//to clreate a new categories list based on filterd service
            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];
                const filterdService = category.services.filter((service, index) => {
                    if (filterBy == 'name') {
                        const name = service.serviceName.toLowerCase();
                        return name.indexOf(filterParam.toLowerCase()) !== -1;
                    }
                    const city = service.address.city.toLowerCase();
                    return city.indexOf(filterParam.toLowerCase()) !== -1;
                });
                if (filterdService.length > 0) {
                    //updates the category object with filted services
                    category.services = filterdService;
                    filterdCategories.push(category);
                }
            }
            setAllCategories(filterdCategories);
        }
    }

    return (
        <div className="w-[96%] mx-auto mt-20 sm:mt-[100px] lg:mt-[70px] sm:flex md:justify-evenly">
            <div className="sm:w-4/12 md:w-2/12">
                <LeftSideBar filterService={ filterService } categories={ categories } />
            </div>
            <div className="sm:w-7/12 md:w-8/12 mx-auto">
                <ServicesList categories={ allCategories } />
            </div>
            <div className="md:w-2/12">
                <RightSideBar />
            </div>
        </div>
    );
}