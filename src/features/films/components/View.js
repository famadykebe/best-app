import React from 'react';
import {Col} from 'reactstrap';


const View = (props) => {



return(
   <Col xs="4">

        {props.movieView  ? (
            <div className="view">

            <h3 className="title-view">{props.movieView.title}</h3>
            <figure className="poster-view">
            <img src={props.movieView.img} alt="" /> 
            </figure>
            <p className="details-view">
            {props.movieView.details}
            </p>
            <p className="dest-view">
                {props.movieView.description}
            </p>
        </div>
        ) : <div className="context">

                cliquer sur un film pour plus d'information

            </div>}

   </Col>
)

}

export default View