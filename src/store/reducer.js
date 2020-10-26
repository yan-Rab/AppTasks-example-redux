

const INITIAL_STATE = {
    tasks: []
}

export default function tasksReducer(state = INITIAL_STATE, action){
    switch (action.type){

        case 'ADD_TASK':

            return {...state, tasks: [...state.tasks, action.task]}

        case 'DELETE_TASK': 
            
            state.tasks.filter((task, index) => {
                if(task.id === action.taskId){
                   state.tasks.splice(index, 1)
                   return true
                }
                return false
            })
            
            return { ...state, tasks: [...state.tasks]}

        default:
            return state
    }
}