import React from "react";
import DataTable from "./DataTable";
import {Transaction} from "../utils/Interfaces";
import {baseCurrency, calculatedCurrency} from "../utils/utils";

const transactionTableHeaders = ["Name", baseCurrency, calculatedCurrency];

interface Props {
    mostValuableTransaction: Array<Transaction>
}

const MostValuableTransaction: React.FC<Props> = (props) => {
        return (
            <>
                <div className={"most-valuable"}>
                    <h4>Most valuable transaction</h4>
                    <DataTable transactions={props.mostValuableTransaction}
                               containsSideButton={true} headers={transactionTableHeaders}/>
                </div>
            </>
        );
}

export default MostValuableTransaction;