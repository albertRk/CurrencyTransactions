import React from "react";
import {changeExchangeRate} from "../store/actions/actions";
import {connect} from "react-redux";
import {ReduxState} from "../store/reducers/rootReducer";
import {Dispatch} from "redux";
import RateInfo from "./RateInfo";
import {baseCurrency, calculatedCurrency} from "../utils/utils";
import ChangeExchangeRate from "./ChangeExchangeRate";

interface StateProps {
    exchangeRate: number
}

interface DispatchProps {
    changeExchangeRate: (rate: number) => void
}

type Props = StateProps & DispatchProps;


interface State {
    toBeShown: boolean
}


class ExchangeRate extends React.Component<Props, State> {
    constructor(props: Props) {
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
        let label: string = !this.state.toBeShown ? "Edit rate" : "Cancel"
        return (
            <>
                <h4>Exchange rate</h4>
                <div className={"exchange-rate-wrapper"}>
                    <div className={"exchange-rate-flex-container"}>
                        <RateInfo exchangeRate={this.props.exchangeRate}
                                  baseCurrency={baseCurrency}
                                  calculatedCurrency={calculatedCurrency}/>
                        <button className={"edit-button"} onClick={this.changeVisibility}>{label}</button>
                    </div>
                    <div className={"exchange-rate-flex-container"}>
                        <ChangeExchangeRate classForHiding={classForHiding}
                                            hideForm={() => this.setState({toBeShown: false})}
                                            changeExchangeRate={this.props.changeExchangeRate}/>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state: ReduxState) => ({
    exchangeRate: state.exchangeRate
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeExchangeRate: (rate: number) => dispatch(changeExchangeRate(rate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);