import React from "react";
import {connect} from "react-redux";
import {baseCurrency, calculatedCurrency, calculateSum} from "../utils/utils";
import {Transaction} from "../utils/Interfaces";

interface StateProps {
    transactions: Array<Transaction>
    exchangeRate: number
}

type Props = StateProps;

class SumOfAllTransactions extends React.Component<Props, any> {

    render() {
        return (
            <>
                <h4>Sum of all transactions</h4>
                <table className={"data-table-wrapper"}>
                    <thead>
                    <tr>
                        <th>{baseCurrency}</th>
                        <th>{calculatedCurrency}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{calculateSum(this.props.transactions, baseCurrency)} {baseCurrency}</td>
                        <td>{calculateSum(this.props.transactions, calculatedCurrency)} {calculatedCurrency}</td>
                    </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        transactions: state.transactions,
        exchangeRate: state.exchangeRate
    }
}

export default connect<StateProps, {}, {}>(mapStateToProps, {})(SumOfAllTransactions);