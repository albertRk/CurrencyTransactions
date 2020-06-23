import React from "react";
import {baseCurrency, calculatedCurrency} from "../utils/utils";

interface Rate {
    ratePLN: string
    rateEUR: string
}

interface State {
    rate: Rate
}

interface Props {
    classForHiding: string
    hideForm: () => void
    changeExchangeRate: (exchangeRate: number) => void
}

class ChangeExchangeRate extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            rate: {
                ratePLN: "",
                rateEUR: ""
            }
        }
    }

    onChange = (event: any) => {
        this.setState({
            rate: {
                ...this.state.rate,
                [event.target.id]: event.target.value
            }
        })
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const formattedRatePLN: number = +(+this.state.rate.ratePLN).toFixed(2);
        const formattedRateEUR: number = +(+this.state.rate.rateEUR).toFixed(2);
        const formattedDivisionResult = +(formattedRatePLN / formattedRateEUR).toFixed(2);

        this.props.changeExchangeRate(formattedDivisionResult);
        this.setState({
            rate: {ratePLN: "", rateEUR: ""}
        })
        this.props.hideForm();
    }

    render() {
        return (
            <>
                <form className={"form-flex-container"}>
                    <input type={"number"} className={`${this.props.classForHiding} custom-input`}
                           placeholder={baseCurrency}
                           onChange={this.onChange} value={this.state.rate.rateEUR} id={"rateEUR"}/>
                    <input type={"number"} className={`${this.props.classForHiding} custom-input`}
                           placeholder={calculatedCurrency}
                           onChange={this.onChange} value={this.state.rate.ratePLN} id={"ratePLN"}/>
                </form>
                <button type={"submit"} className={`${this.props.classForHiding} edit-button`}
                        onClick={this.handleSubmit}>Submit
                </button>
            </>
        );
    }
}

export default ChangeExchangeRate;