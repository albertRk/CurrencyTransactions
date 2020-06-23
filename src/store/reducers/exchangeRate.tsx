export const INITIAL_EXCHANGE_RATE = 4.45;

const exchangeRate = (state: number = INITIAL_EXCHANGE_RATE, action: any) => {
    switch (action.type) {
        case 'CHANGE_EXCHANGE_RATE':
            return action.exchangeRate
        default:
            return state;
    }
}

export default exchangeRate;