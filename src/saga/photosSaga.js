import { put, takeEvery, call, delay  } from "redux-saga/effects"
import {FETCH_PHOTOS, setPhotos} from '../store/photosReducer'
import axios from "axios"

const fetchPhotosFromApi = () => axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24')

function* fetchPhotosWorker() {    
    const data = yield call(fetchPhotosFromApi)
    const payload = {photos: data.data, loading: false}
    yield delay(500)
    yield put(setPhotos(payload))
}

export function* photosWatcher() {
    yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker)
}