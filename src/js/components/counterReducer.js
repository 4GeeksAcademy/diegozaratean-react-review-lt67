export function counterReducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1, message: 'Cambiaste'}
        case 'decrement':
            return {count: state.count - 1, message: 'tienes un valor menor'}
        default: 
            return new Error("No se econtro la acción")

    }

}