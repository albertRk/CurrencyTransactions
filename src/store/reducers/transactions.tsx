import {Transaction} from "../../utils/Interfaces";

const transactions = (state: Array<Transaction> = [], action: any) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                {
                    id: action.id,
                    name: action.name,
                    amountInEUR: action.amountInEUR,
                    amountInPLN: action.amountInPLN
                }, ...state]
        case 'DELETE_TRANSACTION':
            return state.filter(transaction => {
                return transaction.id !== action.id;
            })
        default:
            return state;
    }
}

export default transactions;