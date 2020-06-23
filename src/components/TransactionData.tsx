import React from "react";
import DataTable from "./DataTable";
import {connect} from 'react-redux';
import {addTransaction} from "../store/actions/actions";
import {baseCurrency, calculatedCurrency, compareFunction} from "../utils/utils";
import SumOfAllTransactions from "./SumOfAllTransactions";
import {Transaction} from "../utils/Interfaces";
import MostValuableTransaction from "./MostValuableTransaction";
import AddTransaction from "./AddTransaction";

const transactionTableHeaders = ["Name", baseCurrency, calculatedCurrency];

interface StateProps {
    transactions: Array<Transaction>
    exchangeRate: number
}

interface LocalState {
    toBeShown: boolean
}

interface DispatchProps {
    addTransaction: (name: string, amountInEUR: number, amountInPLN: number) => void
}

type Props = StateProps & DispatchProps;

class TransactionData extends React.Component<Props, LocalState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toBeShown: false,
        }
    }

    changeVisibility = () => {
        this.setState({
            toBeShown: !this.state.toBeShown
        })
    }

    render() {
        let classForHiding: string = !this.state.toBeShown ? "hidden" : "";
        let label: string = !this.state.toBeShown ? "New transaction" : "Cancel"
        let sortedTransactions: Array<any> = this.props.transactions.concat();
        let transactions: Array<any> = this.props.transactions.concat();
        sortedTransactions.sort(compareFunction);

        return (
            <>

                <div className={"transactions-container"}>
                    <div className={"transactions-data"}>
                        <h4>Transactions</h4>
                        <button className={"edit-button"} onClick={this.changeVisibility}>{label}</button>
                        <AddTransaction classForHiding={classForHiding}
                                        hideForm={() => this.setState({toBeShown: false})}
                                        addTransaction={this.props.addTransaction}
                                        transactions={transactions}
                                        exchangeRate={this.props.exchangeRate}/>
                        <DataTable transactions={transactions}
                                   containsSideButton={true}
                                   headers={transactionTableHeaders}/>
                        <SumOfAllTransactions/>
                    </div>
                    <MostValuableTransaction
                        mostValuableTransaction={sortedTransactions[0] ? [sortedTransactions[0]] : []}/>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state: any) => {
    state.transactions.forEach((transaction: any) => {
        transaction.amountInPLN = (transaction.amountInEUR * state.exchangeRate).toFixed(2)
    });
    return {
        transactions: state.transactions,
        exchangeRate: state.exchangeRate
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    addTransaction: (name: string, amountInEUR: number, amountInPLN: number) => dispatch(addTransaction(name, amountInPLN, amountInEUR))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionData)