import React from 'react';
import {Col,Button} from 'reactstrap'

const FavoriteListElement = (props) => {
    const {title,img,details} = props.data;
    return(
        <Col xs="2">
        <div className="card-movie">
            <figure className="poster-movie">
                <img src={img} alt="" />
            </figure>
            <div className="info-movie">
                <h3 className="title-movie">{title} dsd</h3>
                <p className="movie-details">{details}</p>
                <Button color="danger" onClick={() => props.removeFavorite(title)}>supprimer des favoris</Button>
            </div>
        </div>
    </Col>   
    )
}

export default FavoriteListElement;