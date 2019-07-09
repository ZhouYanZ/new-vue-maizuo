import {cityList} from "api/city";
const state = {
    cityList:[],
    hotList:[],
    cityFlag:true,
    cityName:sessionStorage.getItem('cityName')||"上海",
    cityId:sessionStorage.getItem('cityId') || 10
}

const mutations = {
    getMutationsCityList(state,params){
        /*
             热门城市
             let hotCity = [{id:"",name:""}]
             城市列表
             let CityList = [{index:'A',list:[{id:'',name:''}]},{index:'B',list:[{id:'',name:''}]}]
        */

        let hotList = [],cityList = [];

        //热门城市
        params.map((item)=>{
            if(item.isHot){
                hotList.push({id:item.id,nm:item.nm})
            }
        })
        
        //城市列表

        for(var i=0;i<params.length;i++){
            //获取城市的首字母
            let lettefirst = params[i].py.slice(0,1).toUpperCase();
           
            if(isletterFirst(lettefirst)){
                cityList.push({index:lettefirst,list:[{id:params[i].id,nm:params[i].nm}]})
            }else{

                for(var j=0;j<cityList.length;j++){
                    if(lettefirst == cityList[j].index){
                        cityList[j].list.push({id:params[i].id,nm:params[i].nm});
                        break;
                    }
                }
            }   


        }

        //判断首字母是否在CityList中存在
        function isletterFirst(lettefirst){
            var bStop = true;

            //不存在
            if(cityList.length == 0){
                bStop = true;
            }else{
                for(var i=0;i<cityList.length;i++){
                    if(cityList[i].index == lettefirst){
                        //存在
                        bStop = false;
                        break;
                    }
                }
            }

            //没找到是true  找到了是false
            return bStop;
            
        }
        
        //字典排序
        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })

        state.hotList = hotList;
        state.cityList = cityList;
        state.cityFlag = false;
        


    },
    handleModifyCityInfo(state,params){
        state.cityName = params.nm;
        state.cityId = params.id;

        sessionStorage.setItem("cityName",params.nm)
        sessionStorage.setItem("cityId",params.id)
    }
}

const actions = {
   async getCityList({commit}){
        let data = await cityList();
       commit("getMutationsCityList",data.data.cities)
    }   
}


export default {
    state,
    mutations,
    actions,
    namespaced:true
}