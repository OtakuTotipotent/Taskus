export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload)
            };

        default:
            return state;
    }
}
