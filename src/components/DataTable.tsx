import React from "react";
import {deleteTransaction} from "../store/actions/actions";
import {connect} from "react-redux";
import {Transaction} from "../utils/Interfaces";
import NoData from "./NoData";

const columnsOrder: Array<string> = ['name', 'amountInEUR', 'amountInPLN'];
const columnsWithPostfixes: Array<string> = ['amountInPLN', 'amountInEUR'];


interface DispatchProps {
    deleteTransaction: (id: number) => void
}

interface OwnProps {
    headers: Array<any>
    containsSideButton: boolean
    transactions: Array<any>
}

type Props = OwnProps & DispatchProps;

class DataTable extends React.Component<Props, any> {

    handleDelete = (id: number) => {
        this.props.deleteTransaction(id);
    }

    getRows = () => {
        let rowsList: Array<any> = this.props.transactions.length > 0 ? this.props.transactions.map((transaction: Transaction, index: number) => {
                let cellsList: Array<any> = columnsOrder.map((element: string, index: number) => {
                    // @ts-ignore
                    return <td key={index}>{transaction[element]} {columnsWithPostfixes.includes(element) && this.props.headers[index]}</td>
                })
                return <tr key={index}>{cellsList}
                    {
                        this.props.containsSideButton &&
                        <td className={"custom-cell-width"}>
                            <button className={"delete-button"}
                                    onClick={() => this.handleDelete(transaction.id)}>Delete
                            </button>
                        </td>
                    }
                </tr>
            }) :
            [
                <NoData key={1}/>
            ];

        return rowsList;
    }

    getHeaders = () => {
        let headersList: Array<any> = this.props.headers.map((element: any, index: any) => {
            return <th key={index}>{element}</th>
        })

        return headersList;
    }

    render() {

        return (
            <>
                <table className={"data-table-wrapper"}>
                    <thead>
                    <tr>
                        {this.getHeaders()}{this.props.transactions.length > 0 && this.props.containsSideButton && <th/>}
                    </tr>
                    </thead>
                    <tbody>{this.getRows()}</tbody>
                </table>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    deleteTransaction: (id: number) => dispatch(deleteTransaction(id))
})

export default connect(null, mapDispatchToProps)(DataTable);