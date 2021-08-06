import * as axios from "axios";

const BaseAxios = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers: {"API-KEY": "0234f5d8-5878-4472-a063-c0983fb1d3c1"}
})

export const getAxiosUsers =(UsersCurrentPage, UsersCount) =>{
    return BaseAxios.get(`users?page=${UsersCurrentPage}&count=${UsersCount}`)
    .then(response =>{
       return response.data
    });
}

export const getAxiosFollow =(id) =>{
    return BaseAxios.post(`follow/${id}`).then(response =>{
        return response.data
    })
}

export const getAxiosUnFollow =(id) =>{
    return BaseAxios.delete(`follow/${id}`).then(response =>{
        return response.data
    })
}

export const getAxiosProfilePhoto =(id) =>{
    return BaseAxios.get(`profile/${id}`)
}
export const getAxiosLogin = {
    me(){
        return BaseAxios.get(`auth/me`)
    }
}
