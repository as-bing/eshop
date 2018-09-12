import fly from './fly_config' 
//import qs from 'qs' 
// 通用的get请求
const get = (url, params) => {
     return fly.get(`${url}`, params)
};

// 通用的post请求qs.stringify(params.data)
const post = (url, params) => {
    return fly.post(`${url}`,  params.data)
}; 

export const getQQMusic = function () {
    return get("/api/qqmusic/8446666", '');
};
 
export const getTianQi = function () {
    return get("/open/api/weather/json.shtml?city=北京", '')
}

export const postTest=function(params){
    return post("",params)
}