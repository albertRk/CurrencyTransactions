import React from "react";

class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            errorEncountered: false
        }
    }

    static getDerivedStateFromError(error: any) {
        return {
            errorEncountered: true
        }
    }

    render() {
        if (this.state.errorEncountered) {
            return <h2>ERROR! Something went wrong...</h2>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;