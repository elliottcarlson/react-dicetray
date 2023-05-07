import React from "react";

/**
 * @interface
 */
interface IProps {
  name: string;
  color: string;
  background: string;
}

/**
 * Creates a large Call Super Hero button.
 * @property {string} name Name of the superhero
 * @property {string} color Hex or color name for the text
 * @property {string} background Hex or color name for the background
 */
export default class CallSuperHeroButton extends React.Component<IProps> {
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
