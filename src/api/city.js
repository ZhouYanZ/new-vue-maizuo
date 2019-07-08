import http from "utils/http.js"

export const cityList = ()=>http("get","/api/cityList")