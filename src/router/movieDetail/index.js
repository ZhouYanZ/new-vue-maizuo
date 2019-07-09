export default {
    path:"/movieDetail/:id",
    component:()=>import("views/movieDetail"),
    name:"movieDetail",
    props:true,
    meta:{
        tabBarFlag:false
    }
}