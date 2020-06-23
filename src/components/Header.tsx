import React from "react";

interface HeaderProps {
    subtitle?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <h1 className={"app-title"}>{props.children}</h1>
            {props.subtitle && <h4 className={"app-subtitle"}>{props.subtitle}</h4>}
            <hr/>
        </>
    );
}

export default Header;