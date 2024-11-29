'use client'
import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const ServiceContext = createContext();

export const ServiceDataProvider = ({ children }) => {
    const initialState = {
        pageEditMode: false,
        profileEditMode: false,
        productAndServices: [{},{},{}],
        offering: '',
        uploadedImages: [],
        deletedImages: [],
        uploadPending: false,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    let name = 'andi';

    return (
        <ServiceContext.Provider value={{ state, dispatch }}>
            { children }
        </ServiceContext.Provider>
    );
}

export const useServiceContext = () => {
    const serviceContext = useContext(ServiceContext);

    if (!serviceContext) {
        throw new Error("Service context must be used in ServiceDataProvider");
    }
    return serviceContext;
}

//export { ServiceDataProvider, useServiceContext };
