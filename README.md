# 🎲 React Dice Tray

An easy to use Hook and Component that wraps [@3d-dice/dice-box](https://github.com/3d-dice/dice-box).

## Installation

```bash
npm add @elliottcarlson/react-dicetray
```

## Usage

`react-dicetray` exposes a `useDiceTray` hook that returns a `diceTray` component, and a `rollDice` function to roll dice on the provided component.

```jsx
import { useDiceTray } from '@elliottcarlson/react-dicetray'

const MyComponent = () => {
  const { diceTray, rollDice } = useDiceTray()

  return <>
    <div style={{ width: '500px', height: '500px', border: '1px solid black' }}>
        {diceTray}
    </div>
    <button onClick={() => rollDice('5d20'))}>Roll!</button>
  </>
}
```

The `diceTray` component will take up the full height and width of it's parent container. You can target the component via the class name `react-dicetray` to
override any styles.

## Configuration

The `useDiceTray` hook can accept all the [Configuration Options](https://fantasticdice.games/docs/usage/config#configuration-options) used by Dice-Box.

```jsx
const MyComponent = () => {
  const { diceTray, rollDice } = useDiceTray({
    assetPath: '/public/assets/',
    throwForce: 10,
    spinForce: 5,
    mass: 1.3,
    scale: 14,
    onRollComplete: (results: Array<Roll>) => {
        alert(`Total Rolled: ${results[0].value}`);
    }
  })

  ...
}
```

## Dice Notation

The `rollDice` function provided by the hook uses simple dice notations and a modifier such as `2d20` or `2d6+4`. It returns a result object once the dice have stopped rolling.

## Acknowledgement

[@3d-dice/dice-box](https://github.com/3d-dice/dice-box) does all of the heavy lifting, while `react-dicetray` just makes an easy drop and play React wrapper around it.