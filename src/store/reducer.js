

const INITIAL_STATE = {
    tasks: []
}

export default function tasksReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.task]}
        case 'DELETE_TASK': 
            const taskId = action.taskId
            const positionTask = state.tasks.indexOf(taskId)
            const newTasks = state.tasks.splice(positionTask, 1)
            return { ...state, tasks: [...state.tasks]}
        default:
            return state
    }
}