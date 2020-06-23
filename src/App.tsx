import React from 'react';
import './App.css';
import Header from "./components/Header";
import ExchangeRate from "./components/ExchangeRate";
import TransactionData from "./components/TransactionData";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

    const title: string = "Currency transactions";
    const subtitle: string = "Manage currency transactions (PLN/EUR)";
    return (
        <ErrorBoundary>
            <div className="grid-container">
                <div className={"grid-header"}>
                    <Header subtitle={subtitle}>{title}</Header>
                </div>
                <div className={"grid-exchange"}>
                    <ExchangeRate/>
                </div>
                <div className={"grid-transactions"}>
                    <TransactionData/>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default App;
