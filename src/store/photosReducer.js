const defaultState = {
    photos: [],
    loading: true,
}

export const SET_PHOTOS = "SET_PHOTOS"
export const FETCH_PHOTOS = "FETCH_PHOTOS"

export const photosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            console.log(action.payload)
            return { ...state, photos: action.payload.photos, loading: action.payload.loading }
        case FETCH_PHOTOS:
            return { ...state, photos: [],  loading: true }
    }
    return state
}

export const setPhotos = payload => ({ type: SET_PHOTOS, payload })
export const fetchPhotos = () => ({ type: FETCH_PHOTOS })