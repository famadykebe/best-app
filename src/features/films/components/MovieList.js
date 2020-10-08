import React, {useState} from 'react';
import {Col, Row} from 'reactstrap';
import {Movie} from './index';


const MovieList = (props) => {


const [numberPage,setnumberPage] = useState(1);

const folloWing = () => {
   
    const numberPageCrement = numberPage + 1 
    setnumberPage(numberPageCrement);
  
    props.recupNumberPage(numberPageCrement,'movie')
}

const folloWingSearch = () => {
    const numberPageCrement = numberPage + 1 
    setnumberPage(numberPageCrement);
    
     props.recupNumberPageSearch(numberPageCrement)
   
}

const showMtehoSearchFollowing = () =>{
    
    if(props.totalPage && props.page.length === props.totalPage.length){
       return(
        <p>
            La suite
         </p> 
       )
    }else{
        return <Row className="the-following">
            <span className="button-following" onClick={() => folloWingSearch()}>Afficher la suite</span>
        </Row>
    }
}

return(
    <Col xs="8" className="hidden-movie">
        <Row className="left">
        {props.movie && props.movie.length > 0 ? (
         props.movie.map((mov,index) => {
            return(
                <Movie 
                    key={index} 
                    data={mov} 
                    recupMovieChildren={(movieSelect) => {props.recupMovie(movieSelect)}}
                    addFavorite={(title) => props.addFavorite(title)}
                    removeFavorite={(t) => props.removeFavorite(t)}
                    isFavorite={props.favorite.includes(mov.title)}
                /> 
            )
         })  
        ) : null}     
        </Row>

        {props.booleanFolloWing ? 
        (
            <Row className="the-following">
             <span className="button-following" onClick={() => folloWing('movie')}>Afficher la suite </span>
            </Row>
         ): 
        (

            showMtehoSearchFollowing()
                
        )
        }

        
    </Col>
)

}


export default MovieList;