import React from "react";
interface IProps {
    name: string;
    color: string;
    background: string;
}
interface IState {
}
export default class CallSuperHeroButton extends React.Component<IProps, IState> {
    render(): React.JSX.Element;
}
export {};
