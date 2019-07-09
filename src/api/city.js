import http from "utils/http.js"

export const cityList = ()=>http("get","/api/cityList")

export const getLocation = ()=>http("get","/api/getLocation")
