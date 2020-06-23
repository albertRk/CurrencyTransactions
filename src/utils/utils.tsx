export const baseCurrency = "EUR";
export const calculatedCurrency = "PLN";

export const compareFunction = (a: any, b: any) => {
    if (a.amountInEUR > b.amountInEUR) {
        return -1;
    } else if (a.amountInEUR < b.amountInEUR) {
        return 1;
    } else {
        return 0;
    }
}

export const calculateSum = (transactions: Array<any>, currency: string) => {
    return transactions.length > 0 ? transactions.map((transaction: any) => {
        return transaction["amountIn" + currency.toUpperCase()];
    }).reduce((previousValue, currentValue, index, array) => {
        return (+previousValue + (+currentValue)).toFixed(2);
    }) : 0;
}