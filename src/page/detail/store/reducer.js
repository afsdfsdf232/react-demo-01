import { fromJS } from 'immutable'
const defaultState = fromJS({
    title:"",
    content:""
})
export default (state = defaultState, action) => {
    switch(action.type){
        case 'get_detail_info':
            return state.merge({
                title:action.title,
                content:action.content
            });
        default: 
            return state
    }
}