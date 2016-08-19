const boardItem = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_BOARD_ITEM':
            return {
                id: action.id,
                query: action.query,
                results: []
            };
        case 'CHANGE_QUERY_INPUT':
            return {
                ...state,
                query: action.query
            };
        case 'FETCH_TABLE_DATA_SUCCESS':
            return {
                ...state,
                results: action.response
            };
        default:
            return state;
    }
};

export default boardItem;