import { put, takeEvery, call, delay  } from "redux-saga/effects"
import {FETCH_PHOTOS, setPhotos} from '../store/photosReducer'

const fetchPhotosFromApi = () => fetch('https://jsonplaceholder.typicode.com/photos?_limit=24')

function* fetchPhotosWorker() {    
    const data = yield call(fetchPhotosFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    const payload = {photos: json, loading: false}
    yield delay(500)
    yield put(setPhotos(payload))
}

export function* photosWatcher() {
    yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker)
}