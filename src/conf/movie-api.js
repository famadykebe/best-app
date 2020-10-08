import axios from 'axios';

const movieApi = axios.create({
    baseURL:'https://api.themoviedb.org/4'
})

movieApi.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDdhN2Y4Mzc4MTNiZDlhMTk5MGM1YjA4ODg1ZGY4MCIsInN1YiI6IjVkMDc1ZmZiMGUwYTI2NjU3M2NhNDllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fzB1T77B70EzWtKNvoVr8s52zVIVj0wTRNkVmr_x6oY'
    return req
})

movieApi.interceptors.response.use(res => {
    return res;
})

export const cleanData = (data) => {

    return data.map(el => (
      {
        title:el.title,
        details:`${el.release_date} | ${el.vote_average}/10 (${el.vote_count})`,
        img:`https://image.tmdb.org/t/p/w500${el.poster_path}`,
        description:el.overview
      }
    ))

  }


export default movieApi;