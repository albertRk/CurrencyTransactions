import {baseCurrency} from "../utils/utils";
import React from "react";
import {Transaction} from "../utils/Interfaces";

interface State {
    transaction: any
}

interface Props {
    classForHiding: string
    hideForm: () => void
    addTransaction: (name: string, amountInEUR: number, amountInPLN: number) => void
    transactions: Array<Transaction>
    exchangeRate: number
}

class AddTransaction extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            transaction: {
                amountInEUR: "",
                name: ""
            }
        }
    }

    onChange = (event: any) => {
        if (this.state.transaction[event.target.id] !== event.target.value) {
            this.setState({
                transaction: {
                    ...this.state.transaction,
                    [event.target.id]: event.target.value
                }
            })
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (!Object.values(this.state.transaction).some((element: any) => element === "")) {
            let calculatedEUR: number = this.state.transaction.amountInEUR * this.props.exchangeRate
            let properlyCalculated: number = +calculatedEUR.toFixed(2);
            this.props.addTransaction(this.state.transaction.name, +(+this.state.transaction.amountInEUR).toFixed(2), properlyCalculated);
            this.setState({
                transaction: {amountInEUR: "", name: ""}
            })
            this.props.hideForm();
        }
    }

    render() {
        return (
            <form className={` ${this.props.classForHiding} transactions-form`}>
                <input type={"text"}
                       placeholder={"NAME"}
                       className={`${this.props.classForHiding} custom-input`}
                       onChange={this.onChange}
                       id={"name"}
                       value={this.state.transaction.name}/>
                <input type={"number"}
                       placeholder={baseCurrency}
                       className={`${this.props.classForHiding} custom-input`}
                       onChange={this.onChange}
                       id={"amountInEUR"}
                       value={this.state.transaction.amountInEUR}/>
                <button className={` ${this.props.classForHiding} edit-button`}
                        type={"submit"}
                        onClick={this.handleSubmit}>Submit
                </button>
            </form>
        );
    }
}

export default AddTransaction;