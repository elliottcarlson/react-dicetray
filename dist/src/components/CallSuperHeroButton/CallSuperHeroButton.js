import React from "react";
export default class CallSuperHeroButton extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("button", { style: {
                    padding: "2rem",
                    fontSize: "3rem",
                    color: this.props.color,
                    background: this.props.background
                } },
                "Click here to call ",
                this.props.name,
                " !")));
    }
}
