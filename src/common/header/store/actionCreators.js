import axios from 'axios'
import { fromJS } from 'immutable'
import { FOCUS, BLUR, CHANGELIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './actionType'
const changeList = (data) =>({
    type: CHANGELIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10) //共显示的页数
})
export const searchFocus = () => ({
    type: FOCUS
})
export const searchBlur = () => ({
    type: BLUR
})
export const mouseEnter = () =>({
    type: MOUSE_ENTER
})
export const mouseLeave =() => ({
    type: MOUSE_LEAVE
})
export const changePage =(page) => ({
    type: CHANGE_PAGE,
    page
})
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then(
            (res)=>{
                const data = res.data.data
                const action = changeList(data)
                dispatch(action)
            }
        ).catch((err)=>{
            console.log(err)
        })
    }
}