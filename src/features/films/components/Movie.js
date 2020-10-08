import React from 'react';
import {Col,Button} from 'reactstrap';

const Movie = (props) => {

    const overviewMovie = (datas) => {
   
        props.recupMovieChildren(datas)
    }

  
    const {title,img,details} = props.data;

    return(
        <Col xs="3">
            <div className="card-movie" onClick={() => overviewMovie(props.data)}>
                <figure className="poster-movie">
                    <img src={img} alt="" />
                </figure>
                <div className="info-movie">
                    <h3 className="title-movie">{title}</h3>
                    <p className="movie-details">{details}</p>
                    {props.isFavorite ? (<Button color="danger" onClick={() =>props.removeFavorite(title)}>supprimer des favoris</Button>) : 
                    (<Button color="primary" onClick={() => props.addFavorite(title)}>ajouter dans mes favoris</Button>)}
                </div>
            </div>
        </Col>   
    )
}

export default Movie;