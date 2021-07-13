import { call, put, takeLatest, cancelled, cancel, fork, take } from 'redux-saga/effects'
import { fetchMovieListSucceeded, fetchMovieListFailed } from '../actions/movie-list.action';
import { MOVIE_APP_LEAVING_EVENT, FETCH_MOVIE_REQUESTED } from '../action-types';
import axios from 'axios';
import { getMovies } from '../services';
 
function* fetchMovie(action:any):any {
   const source = axios.CancelToken.source();
   try {
      const options = {
         cancelToken: source.token,  
         params: {
          
         } 
      };   
      const movieList = yield call(getMovies, options);
      yield put(fetchMovieListSucceeded(movieList));
   } catch (e) {
      yield put(fetchMovieListFailed( {message: e.message} ));
   }
   finally {
     if (yield cancelled()) {
        source.cancel('task/api cancelled');
     }
 }
}

function* fetchMovieListRequested(action:any):any {
   const task1 = yield fork(fetchMovie, action)

   const leavePageAction = yield take(MOVIE_APP_LEAVING_EVENT); 
 
    if (leavePageAction.type === MOVIE_APP_LEAVING_EVENT) {
        yield cancel(task1)
    }
 }

 function* movieSaga() {
   yield takeLatest(FETCH_MOVIE_REQUESTED, fetchMovieListRequested);
 }
 
 export default movieSaga;