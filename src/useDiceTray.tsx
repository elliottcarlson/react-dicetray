import React, { useCallback, useId, useRef } from 'react';
import { DEFAULT_DICETRAY_CONFIG, DiceTrayConfig, RollDiceConfig } from './options';
import { Die } from './types';
import DiceBox from '@3d-dice/dice-box';

const useDiceTray = (diceTrayConfig: Partial<DiceTrayConfig> = {}) => {
  // Merge options
  const config: DiceTrayConfig = { ...DEFAULT_DICETRAY_CONFIG, ...diceTrayConfig };

  const containerRef = useRef<HTMLDivElement>();

  const diceTray = (
    <div ref={containerRef} />
  )

  const Dice = new DiceBox(
    containerRef.current, // target DOM element to inject the canvas for rendering
    {
      assetPath: "/assets/",
      startingHeight: 8,
      throwForce: 6,
      spinForce: 5,
      lightIntensity: 0.9
    }
  );

  Dice.init().then(() => {
    // clear dice on click anywhere on the screen
    document.addEventListener("mousedown", () => {
      const diceBoxCanvas = document.getElementById("dice-canvas");
      if (diceBoxCanvas && window.getComputedStyle(diceBoxCanvas).display !== "none") {
        Dice.hide().clear();
      }
    });
  });


  Dice.onRollComplete = (results: any) => {
    console.log(results);
  };
/*
  const dice = useRef<Die[]>([]);
  const diceTrayRef = useRef<HTMLCanvasElement>();
  const context = useRef<CanvasRenderingContext2D>();
*/

  const rollDice = useCallback(async (rollDiceConfig: Partial<RollDiceConfig> = {}) => {
    Dice.show().roll("1d6");
  }, [config])



  return {
    diceTray,
    rollDice,
  }
}

export default useDiceTray;