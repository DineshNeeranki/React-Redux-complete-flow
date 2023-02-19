const initialState={
    isLogin: false
}

export function AuthReducer(state=initialState, action) {
    switch(action.type) {
        case 'LOGGEDIN':
            return {
                ...state,isLogin: true
            }
        case 'LOGGEDOUT':
            return {
                ...state,isLogin: false
            }
        default: return state;
    }
}