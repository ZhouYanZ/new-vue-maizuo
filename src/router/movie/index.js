
export default {
    path:"/movie",
    component:()=>import("views/movie"),
    name:"movie",
    redirect:"/movie/movieBody",
    children:[
        {
            path:"movieBody",
            component:()=>import("components/movieBody"),
            name:"moviebody"
        },
        {
            path:"movieComming",
            component:()=>import("components/movieComming"),
            name:"moviecomming"
        }
    ]
}