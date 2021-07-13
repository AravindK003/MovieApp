import * as ActionTypes from "../action-types"

export const fetchMovieListSucceeded = (movieList:any) =>({
    type: ActionTypes.FETCH_MOVIE_SUCCEEDED,
    payload: {
        movieList
    } 
});


export const fetchMovieListRequested = (id:any) =>({
type: ActionTypes.FETCH_MOVIE_REQUESTED,
payload: {
    
} 
}); 


export const fetchMovieListFailed = (error:any) =>({
type: ActionTypes.FETCH_MOVIE_FAILED,
payload: {
    error
}
});