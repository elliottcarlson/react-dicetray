import React from 'react';
import DiceBox from '@3d-dice/dice-box';
import { DEFAULT_DICETRAY_CONFIG, DiceTrayConfig } from '../config';
import './DiceTray.css';

const createId = () => {
    return 'tray-xxxxxxxx'.replace(/[x]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};


export default class DiceTray extends React.PureComponent<DiceTrayConfig> {
    id: string;
    props: DiceTrayConfig;
    DiceBox: any;
    onReady: Function;

    constructor(props: DiceTrayConfig) {
        super(props);

        this.onReady = props.onReady;

        this.props = props;
        this.id = createId();
    }

    componentDidMount() {
        let options = { ...DEFAULT_DICETRAY_CONFIG, ...this.props };
        delete options.onReady;

        this.DiceBox = new DiceBox(
            `#${this.id}`,
            options
        );

        this.DiceBox.init().then(() => {
            console.log(this.DiceBox)

            if (typeof this.onReady === 'function') this.onReady(this.DiceBox.roll.bind(this.DiceBox));
        });
    }

    render() {
        return (
            <div id={this.id} className='react-dicetray' />
        );
    }
}