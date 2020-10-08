import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import {Header,NotFound} from './components/Index';
import movieApi,{cleanData} from './conf/movie-api';
import * as firebase from 'firebase'
import firebaseConfig from './conf/apiFirebase';
import Films from './features/films/';
import Favorie from './features/favories/';
import Loading from './utils/loading';

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()

const App = () => {

   const [movie,setmovie] = useState([]);
   const [movieView,setMovieView] = useState(null);
   const [booleanFolloWing,setbooleanFolloWing] = useState(true);
   const [url,seturl] = useState('');
   const [page,setpage] = useState(0)
   const [totalPage,settolPage] = useState(null);
   const [isLoggedin,setisLoggeding] = useState(false)
   const [favorite,setfavorite]  = useState([]);
   const [isLoggedinFavorite,setisLoggedinFavorite] = useState(false)

   function resultMethod(){

    movieApi.get('/discover/movie').then(response => response.data.results).then((data) => {
      const movie = cleanData(data)
      setmovie(movie)
      setisLoggeding(!isLoggedin)

    })

  }

  const recupMovie = (movie) => {
    setMovieView(movie)
  }


  const addFavorite = (title) => {
    const favorisFianal = [...favorite];
    const film = movie.find(m => m.title === title);
    favorisFianal.push(film);
    setfavorite(favorisFianal);

    db.collection('film').add(film).then(res => {
    }).catch(err => {
    })
  }

  const favorieMovie = () => {
    db.collection('film').get().then(snapshoot => {
      const favorie = snapshoot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      })
      setfavorite(favorie)
      setisLoggedinFavorite(true)
    }).catch(err => {
    })
  }


  const removeFavorite = (title) => {
   
    const favorisFianal = [...favorite]
    const film = favorisFianal.find(f => f.title === title);
    const indexTitle = favorisFianal.findIndex(f => f.title === title);

    const final = favorisFianal.filter((m,index) => (index !== indexTitle))
    setfavorite(final);

    if(film.id){
      db.collection('film').doc(film.id).delete()
    }

  }
  const recupNumberPage = (numberPage) => {
      movieApi.get(`/discover/movie?page=${numberPage}`).then(response =>response.data.results).then(data => {
        const newmovie = cleanData(data);
        setmovie([...movie,...newmovie])
       })
    
  }

  const recupNumberPageSearch = (numberPage) => {  
    setpage(numberPage)
    movieApi.get(`${url}page=${numberPage}`).then(response => {
      settolPage(response.data.total_pages)
      return response.data.results;
    }).then(data => {
      const newmovie = cleanData(data);
      setmovie([...movie,...newmovie])
     
     })
  }
  useEffect(() => {
    resultMethod();
    favorieMovie()
  },[])

  const getSearch = (movie,resultBooleanFollowing,url) => {
    setmovie(movie);
    setbooleanFolloWing(resultBooleanFollowing);
    seturl(url);
  }

  return(
     <Router>
       <Header />
  
      <div className="container-fluid container-pdtop" role="main">
        <Switch>
            <Route path="/home" render={() => (
                isLoggedin ? (<Films 
                  page={page}
                  totalPage={totalPage}
                  booleanFolloWing={booleanFolloWing}
                  movie={movie}
                  recupNumberPage={() => {recupNumberPage()}}
                  recupNumberPageSearch={(numberPage) => {recupNumberPageSearch(numberPage)}}
                  movieView={movieView}
                  getSearch={(movies,resultBooleanFollowing,url) => getSearch(movies,resultBooleanFollowing,url)}
                  recupMovie={(movie) => recupMovie(movie)}
                  addFavorite={(title) => addFavorite(title)}
                  removeFavorite={(title) => removeFavorite(title)}
                  favorite={ favorite.map( f => f.title ) }
                />):
                (<Loading />)
              )}>

            </Route>
            <Route path="/favorie" render={(props) => (<Favorie 
            favorite={favorite} isLoggedinFavorite={isLoggedinFavorite}
            removeFavorite={(title) => removeFavorite(title)}
            />)
            }></Route>
            <Redirect exact from="/" to="/home" />
            <Route component={NotFound}></Route>
        </Switch>
                  
      </div>
     </Router>

  )

}


export default App;
