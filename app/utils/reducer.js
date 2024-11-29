
const reducer = (state=initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "AddProductTitle":
            const changedArray = state.productAndServices.map((item, index) => {
                if (index === payload.index) {
                    return {
                        ...item,
                        title: payload.title
                    }
                }
                return item;
            })

            return {
                ...state,
                productAndServices: changedArray
            }

        case "AddProductDetail":
            const changedDetailArray = state.productAndServices.map((item, index) => {
                if (index === payload.index) {
                    return {
                        ...item,
                        description: payload.description
                    }
                }
                return item;
            })

            return {
                ...state,
                productAndServices: changedDetailArray
            }

        case "AddDeletedImage":
            return {
                ...state,
                deletedImages: [...state.deletedImages, payload.id]
            }
        
        case "AddToBeUploadedImages":
            return {
                ...state,
                uploadedImages: payload.tobeUploadedImages
            }
        case "TogglePageEditMode":
            return {
                ...state,
                pageEditMode: payload.isPageEditMode
            }
        
        case "ToggleProfileEditMode":
            return {
                ...state,
                profileEditMode: payload.isProfileEditMode
            }

        case "ToggleUploadPending":
            return {
                ...state,
                uploadPending: payload.isUploadPending
            }
        
        case "AddOffering":
            return {
                ...state,
                offering: payload.offering
            }
        default:
            return state;
    }
}

export default reducer;