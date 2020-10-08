import React from 'react';
import {FavoriteList} from './componants/'
const Favorite  = (props) => {
    return(
        <FavoriteList isLoggedinFavorite={props.isLoggedinFavorite} favorite={props.favorite} removeFavorite={(title) => props.removeFavorite(title)}/>
    )

}

export default Favorite;