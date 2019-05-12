export default (state = {}, action) => {
    switch(action.type){
        case "GET_SCHOOL":
            return action.payload
        case "LOGOUT":
            return {};
        default:
            return state;
    }
}