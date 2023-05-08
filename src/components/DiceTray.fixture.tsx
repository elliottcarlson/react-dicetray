import React from 'react';
import DiceTray from './DiceTray';
import useDiceTray from '../useDiceTray';
import { Roll } from '../types';

export default {
    Props: <DiceTray
        gravity={1}
        mass={1}
        friction={0.8}
        restitution={0}
        angularDamping={0.4}
        linearDamping={0.4}
        spinForce={4}
        throwForce={5}
        startingHeight={8}
        settleTimeout={5000}
        offscreen={true}
        delay={10}
        lightIntensity={1}
        enableShadows={true}
        shadowTransparency={0.8}
        theme='default'
        themeColor='#2e8555'
        scale={6}
        suspendSimulation={false}
        origin={location.origin}
        onReady={(rollDice) => { rollDice('1d6') }}
    />,
    SmallArea: <div style={{ width: '50px', height: '50px', border: '1px solid black' }}><DiceTray
        gravity={10}
        mass={1000}
        friction={1}
        restitution={0}
        angularDamping={1}
        linearDamping={1}
        spinForce={0}
        throwForce={0}
        startingHeight={2}
        settleTimeout={5000}
        offscreen={true}
        delay={10}
        lightIntensity={1}
        enableShadows={true}
        shadowTransparency={1}
        theme='cotl'
        themeColor='#2e8555'
        scale={130}
        onReady={(rollDice) => { rollDice('1d6') }}
    /></div>,
    onReady: () => {
        const { diceTray, rollDice } = useDiceTray({
            onReady: () => {
                rollDice('1d10');
            }
        });

        return diceTray;
    },
    onRollComplete: () => {
        const { diceTray, rollDice } = useDiceTray({
            theme: 'cotl',
            scale: 20,
            onRollComplete: (results: Array<Roll>) => {
                alert(`Total Rolled: ${results[0].value}`);
            }
        });

        return <>
            {diceTray}
            <button onClick={() => rollDice('20d6')}>Roll Dice</button>
        </>;
    }
};