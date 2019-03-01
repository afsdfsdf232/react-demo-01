import { fromJS } from 'immutable'
// import { } from './actionType'
const defaultState = fromJS({
    login: false
})
 
export default (state = defaultState, action) => {
    switch(action.type){
        case  'change_login':
            return state.set('login',true);
        case 'chang_out_login':
            return state.set('login',false);
            
        default: 
            return state;
    }
}