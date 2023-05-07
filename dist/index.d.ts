import React from "react";
/**
 * @interface
 * @property {string} name Name of the superhero
 * @property {string} color Hex or color name for the text
 * @property {string} background Hex or color name for the background
 */
interface IProps {
    name: string;
    color: string;
    background: string;
}
/**
 * Creates a large Call Super Hero button.
 */
export class CallSuperHeroButton extends React.Component<IProps> {
    render(): React.JSX.Element;
}

//# sourceMappingURL=index.d.ts.map
