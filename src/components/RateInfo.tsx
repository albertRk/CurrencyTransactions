import React from "react";

interface RateInfoProps {
    exchangeRate: number
    baseCurrency: string
    calculatedCurrency: string
}

const RateInfo: React.FC<RateInfoProps> = (props) => {
    return (
        <span className={"exchange-rate-info"}>
            <span className={"currency-value"}>1</span>
            <span className={"currency-label"}>{props.baseCurrency}</span>
            <span className={"currency-label"}>></span>
            <span className={"currency-value"}>{props.exchangeRate}</span>
            <span className={"currency-label"}>{props.calculatedCurrency}</span>
        </span>
    );
}

export default RateInfo;