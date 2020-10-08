import React from 'react';
import {MovieList,View,Search} from './components/index';
import {Row} from 'reactstrap';

const Films = (props) => {

return(
    <>
       <Row>
        <Search getSearch={(movies,resultBooleanFollowing,url) => props.getSearch(movies,resultBooleanFollowing,url)}/>
      </Row>
      <Row className="pd20-row">
        <MovieList 
        
        page={props.page} 
        totalPage={props.totalPage}
        booleanFolloWing={props.booleanFolloWing} 
        movie={props.movie} recupMovie={(movieSelect) => props.recupMovie(movieSelect)} 
        recupNumberPage={(numberPage)  => props.recupNumberPage(numberPage)} 
        recupNumberPageSearch={(numberPage) => props.recupNumberPageSearch(numberPage)}
        addFavorite={(title) => props.addFavorite(title)}
        removeFavorite={(title) => props.removeFavorite(title)}
        favorite={props.favorite}
        /> 
        <View movieView={props.movieView}/>
      </Row> 
    </>
)

}


export default Films;