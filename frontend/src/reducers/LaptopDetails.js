const FilesReducer = (state=[], action) =>{
    switch (action.type) {
        case 'GET_FILES':
            state.push(action.payload)
            return state;
        default:
            return state;
    }
}

export default FilesReducer;
