import * as ActionTypes from "../action-types";

interface MovieState {
  movieList:any;
}

const INTIAL_STATE: MovieState = {
  movieList:[]
}

export const movieReducer = (state = INTIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIE_SUCCEEDED: {
            return { ...state, ...action.payload };
          }
      
          case ActionTypes.FETCH_MOVIE_FAILED: {
            return { ...state, ...action.payload };
          }
    default:
      return state;
    }
}
