import React, { useRef } from 'react';
import { DiceTrayConfig } from './config';
import DiceTray from './components/DiceTray';

const useDiceTray = (diceTrayConfig: Partial<DiceTrayConfig> = {}) => {
  const ref = useRef(null);
  const diceTray = <DiceTray ref={ref} {...diceTrayConfig} />;

  const rollDice = (notation?: string | Array<string>) => {
    ref.current?.DiceBox?.roll(notation ?? '1d20');
  };

  const updateConfig = (config: Partial<DiceTrayConfig>) => {
    ref.current?.DiceBox?.updateConfig(config);
  }

  return {
    diceTray,
    rollDice,
    updateConfig,
  }
}

export default useDiceTray;