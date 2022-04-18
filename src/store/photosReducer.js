const defaultState = {
    photos: []
}

export const SET_PHOTOS = "SET_PHOTOS"
export const FETCH_PHOTOS = "FETCH_PHOTOS"

export const photosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PHOTOS:
            return { ...state, photos: action.payload }
    }
    return state
}

export const setPhotos = payload => ({ type: SET_PHOTOS, payload })
export const fetchPhotos = () => ({ type: FETCH_PHOTOS })