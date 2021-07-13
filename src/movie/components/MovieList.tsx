import React from 'react';
import { Grid,Card,CardContent,CardMedia, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxHeight: 160,
      maxWidth : 450,
      borderRadius:15 ,
      borderLeft:'4px solid #2340a8' 

    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 180,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    img:{
        width:160,
        height:160,
    }
  }));

 
export function ControlCard(props:any) {
  const classes = useStyles();  

  return (  
     <React.Fragment>
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {props.data.map((dat:any) => (
            <Grid item xs={12} sm={4} key={props.data.name}>
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {dat.original_title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Date- {dat.release_date}
            &ensp;
            IMDB - {dat.vote_average}/10
          </Typography>
          <Button variant="outlined" color="primary" size="small" onClick={()=>{props.details(dat.id)}}>Details</Button> &ensp;
          <Button variant="outlined" color="primary" size="small" href="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"> Preview </Button>
        </CardContent>
      </div>
        <CardMedia
            className={classes.cover}>
                <img className={classes.img} src={`https://image.tmdb.org/t/p/w500/${dat.backdrop_path}`} alt=""/>
            </CardMedia>
         </Card>
            </Grid>
          ))}
        </Grid>   

      

     </React.Fragment>
   
  );
}
 