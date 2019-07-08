import http from "utils/http.js"

export const getMovieNow = ()=>http("get","/api/movieOnInfoList",{cityId:10})

export const getMovieComm = ()=>http("get","/api/movieComingList",{cityId:10})

export const cinemaList = ()=>http("get","/api/cinemaList",{cityId:10})

export const search = (val)=>http("get","/api/searchList",{cityId:10,kw:val})


