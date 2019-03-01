import { fromJS } from 'immutable'
import { } from './actionType'
const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}