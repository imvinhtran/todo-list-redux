const initeState = {
    
        search: '',
        status: 'All',
        priority: []
    
}

const filtersReducer = (state = initeState, action) => {
    switch (action.type) {
        case 'filters/searchFilterChange': 
            return {
                ...state,
                search: action.payload
            }
        case 'filters/statusFiltersChange':
            return {
                ...state,
                status: action.payload
            }
        default: 
            return state;
    }
}

export default filtersReducer;