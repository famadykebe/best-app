import React from 'react';
import {Row} from 'reactstrap';
import {FavoriteListElement} from './index';
import Loading from '../../../utils/loading'

const FavoriteList = (props) => {
 
    return(
        <Row>
            
        {
            
        props.isLoggedinFavorite ? (
                 
            props.favorite.length > 0 ?  (
                props.favorite.map((f,index) => {
                    return(
                        <FavoriteListElement 
                            key={index} 
                            data={f} 
                            removeFavorite={(t) => props.removeFavorite(t)}
                        /> 
                    )
                }) 
            ) : (
                <div className="center-title-not-favorite">
                    <i className="far fa-heart icon-favorite"></i>
                    <h2 className="title-favorite">Aucun favorie</h2>
                    </div>
            )

        ) : (<Loading />)
       }
     </Row>
    )
}

export default FavoriteList;