import React, { Component } from "react";
import MovieAppBar from "../components/AppBar";
import { Container } from '@material-ui/core';
import { ControlCard } from "../components/MovieList";
import Box from '@material-ui/core/Box';
import { getMovie } from "../state/services";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { DialogTitle, Typography } from '@material-ui/core';

export interface MoviesProps {
  dispatchers: any;
  movieList:any;
}

export interface MoviesState {
  detail:any
  open:boolean
}

class Movies extends Component<MoviesProps, MoviesState> {
  constructor(props: MoviesProps) {
    super(props);
    this.state = {
      detail: {},
      open: false,
    };
  }

  componentDidMount() {
    const {  dispatchers }: any = this.props;
    dispatchers.fetchMovieListRequested();
  } 

  details=(id:any)=>{
      getMovie(id,{}).then(async (response)=>{
         await this.setState({detail:response,open:true})
      })
  }

  handleClose(){
    this.setState({open:false})
  }

 
  render() {
    const {movieList} =this.props;
    const {detail} =this.state;
    return (
      <React.Fragment>
        <MovieAppBar />
        <Container maxWidth={false}>
        <Box mt={2}>
          {this.props.movieList.results &&
          <ControlCard data={movieList.results} details={this.details}/>}
        </Box>

    {this.state.open && this.state.detail &&
        <Dialog 
                open={this.state.open}
                onClose={()=>this.handleClose()}
                disableBackdropClick={false}
            >
                <DialogTitle>{detail.original_title}</DialogTitle> 
                <DialogContent dividers>  
                  <Typography variant="subtitle1" color="textSecondary" >
                    Genres  - {detail.genres.map((gen:any)=>{
                     return gen.name
                    })} <br /><br />
                    Language - {detail.spoken_languages.map((lan:any)=>{
                      return lan.name
                    })} <br /><br />
                    Overview - {detail.overview} <br /><br />
                    Status   - {detail.status}  <br /><br />
                    Revenue  - {detail.revenue} <br /><br />
                    Runtime  - {detail.runtime} <br /><br />
                    IMDB Rating - {detail.vote_average} / 10 <br /><br />
                    Vote Count - {detail.vote_count} <br /><br />
                    Budget     - {detail.budget} <br /><br />
                    Tagline    - {detail.tagline} <br /><br />
                    Production Company - {detail.production_companies.map((com:any)=>{
                      return com.name
                    })} <br /><br />
                    Production Country - {detail.production_countries.map((coun:any)=>{
                      return coun.name
                    })} <br /><br />
                  </Typography>
                </DialogContent>  
                <DialogActions> 
                <Button onClick={()=>this.handleClose()}>Close</Button>  
                </DialogActions>
                </Dialog>}
         
       </Container>
      </React.Fragment>
    );
  }
}

export default Movies;
