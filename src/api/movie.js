import http from "utils/http.js"

export const getMovieNow = (id=10)=>http("get","/api/movieOnInfoList",{cityId:id})

export const getMovieComm = ()=>http("get","/api/movieComingList",{cityId:10})

export const cinemaList = ()=>http("get","/api/cinemaList",{cityId:10})

export const search = (val)=>http("get","/api/searchList",{cityId:10,kw:val})

export const movieDetail = (id)=>http("get","/api/detailmovie",{movieId:id})

