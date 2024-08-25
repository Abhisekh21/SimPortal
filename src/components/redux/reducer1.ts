const reducer1 = (state = { movies: [] }, action: any) => {

    switch (action.type) {
        case 'Movies':
            return { ...state, movies: action.payload }
        default:
            return state;
    }
}




export default reducer1;