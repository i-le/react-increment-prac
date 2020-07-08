import {INCREMENT, DECREMENT} from "./action-types"



export const incrementCreator = (number) => {
    return (
        {type: INCREMENT, data: number}
    )
}

export const decrementCreator = number => ({type: DECREMENT, date: number})