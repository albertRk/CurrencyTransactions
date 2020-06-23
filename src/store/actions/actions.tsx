const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const CHANGE_EXCHANGE_RATE = 'CHANGE_EXCHANGE_RATE';

export const addTransaction = (name: string, amountInPLN: number, amountInEUR: number) => ({
    type: ADD_TRANSACTION,
    id: Math.random(),
    name,
    amountInEUR,
    amountInPLN
});

export const deleteTransaction = (id: number) => ({
    type: DELETE_TRANSACTION,
    id
});

export const changeExchangeRate = (exchangeRate: number) => ({
    type: CHANGE_EXCHANGE_RATE,
    exchangeRate
})