import { put, takeEvery, call } from "redux-saga/effects"
import {FETCH_PHOTOS, setPhotos} from '../store/photosReducer'
const fetchPhotosFromApi = () => fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')

function* fetchPhotosWorker() {
    const data = yield call(fetchPhotosFromApi)
    console.log(data)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setPhotos(json))
}

export function* photosWatcher() {
    yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker)
}