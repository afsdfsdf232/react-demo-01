import { HOME_LIST_INFO, MORELIST_INFO, SHOWSCROLLTRUE, SHOWSCROLLFALSE } from './actionType'
const defaultState = {
    topicList: [],
    articeList:[],
    reImg:[],
    isShow: false
}
export default (state = defaultState, action) => {
    if(action.type === HOME_LIST_INFO){
        const newState = JSON.parse(JSON.stringify(state))
        newState.topicList = action.topicList
        newState.articeList = action.articeList
        newState.reImg = action.reImg
        return newState
    }
    if(action.type === MORELIST_INFO){
        const newState = JSON.parse(JSON.stringify(state))
        newState.articeList.push(...action.articeList)
        return newState
    }
    if(action.type == SHOWSCROLLTRUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.isShow = true
        return newState
    }
    if(action.type == SHOWSCROLLFALSE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.isShow = false
        return newState
    }
    return state
}