import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Movies from '../pages/Movies';
import { fetchMovieListRequested } from '../state/actions/movie-list.action';
  
export const mapStateToProps = (state: any) => { 
    return {
        movieList: state.movieReducer.movieList
    }
} 
 
export const mapDispatchToProps = (dispatch: any, getState: any) => {
    return  {
        dispatchers : bindActionCreators( {fetchMovieListRequested}, dispatch )
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Movies);  