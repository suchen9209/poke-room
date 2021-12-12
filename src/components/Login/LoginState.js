export default (state={}, action) => {
    console.log(state)
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return state
        default:
            return state
    }
}
