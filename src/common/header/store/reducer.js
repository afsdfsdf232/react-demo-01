import { fromJS } from 'immutable'
import { FOCUS, BLUR, CHANGELIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './actionType'
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})
export default (state = defaultState,action) => {
    switch(action.type) {
        case FOCUS:
            return state.set('focused',true);
        case BLUR:
            return state.set('focused',false);
        case CHANGELIST:
            return state.set('list',action.data)
                        .set('totalPage',action.totalPage);
        case MOUSE_ENTER:
            return state.set('mouseIn',true);
        case MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state
    }
    // if(action.type===FOCUS){
    //     // const newState = JSON.parse(JSON.stringify(state)) 
    //     // newState.focused=true
    //     return  state.set('focused',true)
    // }
    // if(action.type===BLUR){
    //     // const newState = JSON.parse(JSON.stringify(state))
    //     // newState.focused=false
    //     return state.set('focused',false)
    // }
    // if(action.type===CHANGELIST){
    //     // console.log('11',action)
    //     return state.set('list',action.data)
    // }
    // return state
}