import axios from 'axios'
import { HOME_LIST_INFO, MORELIST_INFO } from './actionType'
const changeHomeData = (result) => ({
    type: HOME_LIST_INFO,
    topicList:result.topicList,
    articeList:result.articeList,
    reImg:result.reImg
})
const getMoreDate = (data) =>({
   
    type: MORELIST_INFO,
    articeList: data.list
})
export const getList = () =>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const data = res.data.data
            // const action = {
            //     type:'change_home_list_data',
            //     topicList:data.topicList,
            //     articeList:data.articeList,
            //     reImg:data.reImg
            // }
            const action = changeHomeData(data)
            dispatch(action)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const getMoreList = ()=>{
    return (dispatch) => {
        axios.get('/api/moreHome.json').then((res)=>{
            const data = res.data
            dispatch(getMoreDate(data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}