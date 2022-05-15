const initeState = [
        {id: 1, name: 'Learn React', priority: 'High', completed: false},
        {id: 2, name: 'Learn Js', priority: 'Medium', completed: false},
        {id: 3, name: 'Learn HTML', priority: 'Low', completed: true},
    ]

const todoListReducer = (state = initeState, action) => {
    switch(action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        default: 
            return state;
    }
}

export default todoListReducer;