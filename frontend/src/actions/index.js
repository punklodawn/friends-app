export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SET_MESSAGE = 'SET_MESSAGE';



export const fetchFriends = (amigos) => {
    return {
        type: FETCH_FRIENDS,
        payload: amigos
    }
}

export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}


