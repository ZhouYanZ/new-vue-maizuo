


import http from "utils/http.js"

export const getMovieNow = ()=>http("get","/api/movieOnInfoList",{cityId:10})

export const getMovieComm = ()=>http("get","/api/movieComingList",{cityId:10})