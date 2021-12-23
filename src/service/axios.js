import axios from 'axios'

axios.defaults.baseURL = 'https://elm.cangdu.org';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const TIMEOUT = 5000;
const devBaseURL = "https://elm.cangdu.org";
const proBaseURL = "https://elm.cangdu.org";

export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
axios.interceptors.request.use(config=>{
    // 1.发送网络请求时，在页面中添加一个loading组件作为动画；
     // 2.某些网络请求要求用户必须登录，可以在请求中判断是否携带了token，没有携带token直接跳转到login页面；
     return config
},err=>{
    return err
})

axios.interceptors.response.use(response=>{
    return response.data
},err=>{
    if(err&&err.response){
        switch(err.response.status){
            case 400 :
                err.message = "请求错误";
                break
            case 401:
                err.message="未授权访问"

        }
    }
    return err
})