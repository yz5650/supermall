import axios from 'axios'

//第四种方案
export function request(config) {
    //1、创建实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout: 5000
    })
    //2、axios的拦截器
      //请求拦截
      instance.interceptors.request.use(config=>{//成功拦截
        //做什么事情呢？1、config中的一些信息不符合服务器的要求；2、每次发送网络请求时。都希望在界面显示一个请求图标；3、某些网络请求比如登录（token），必须携带一些特殊的信息
        console.log(config)
        //放行
        return config
      },err=>{//失败拦截
        console.log(err )
      })

      //响应拦截
      instance.interceptors.response.use(res=>{
        // console.log(res)
        //放行  data才是真正的结果
        return res.data
      },err=>{
        console.log(err)
      })
    //3、发送真正的网络请求
    return instance(config)
}


//第三种方案
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1、创建实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:8000/api/n3',
//       timeout: 5000
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then(res1 => {
//拿到成功后的res1传给main里面的res函数打印
//       resolve(res1)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }


// //第一种方式
// export function request(config,success,failure) {
// //1、创建实例
//   const instance = axios.create({
//     baseURL:'http://152.136.185.210:8000/api/n3',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config).then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }

//第二种方式
// export function request(config) {
// //1、创建实例
//   const instance = axios.create({
//     baseURL:'http://152.136.185.210:8000/api/n3',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config.baseConfig).then(res=>{
//     config.success(res)
//   }).catch(err=>{
//     config.failure(err)
//   })
// }
