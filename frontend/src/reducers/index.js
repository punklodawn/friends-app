import {FETCH_FRIENDS, SET_MESSAGE} from '../actions/index'

let initialState = {
    friendList: [],
    message: {
        type: '',
        display: 'none',
        title: '',
        text: ''
    },
    loading: false

};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_FRIENDS:
            return {
                ...state, friendList: action.payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        default:
            return state

    }

}
export default rootReducer;