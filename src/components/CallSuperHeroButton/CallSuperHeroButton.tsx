import React from "react";

interface IProps {
  name: string;
  color: string;
  background: string;
}
interface IState {}

export default class CallSuperHeroButton extends React.Component<IProps, IState> {
  public render() {
    return (
      <>
        <button
          style={{
            padding: "2rem",
            fontSize: "3rem",
            color: this.props.color,
            background: this.props.background
          }}
        >
          Click here to call {this.props.name} !
        </button>
      </>
    );
  }
}
