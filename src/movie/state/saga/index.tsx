import { fork } from 'redux-saga/effects';
import movieSaga from './movie-list.saga';

export default function* movieRootSaga() {
    yield fork(movieSaga)

}