import { combineReducers } from 'redux';
import transactions from "./transactions";
import exchangeRate from "./exchangeRate";

const rootReducer = combineReducers({
    transactions,
    exchangeRate
})

export type ReduxState = ReturnType<typeof rootReducer>
export default rootReducer;