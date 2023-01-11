const GiveIdReducer = (state, action) => {

    const { type, payload } = action;
    switch (type){
        case 'UserData':
            return payload.data.users;
        default:
            return state
    }
}

export default GiveIdReducer;