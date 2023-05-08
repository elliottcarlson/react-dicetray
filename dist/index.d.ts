import React from "react";
interface Dice {
    sides: string;
    groupId: number;
    rollId: number;
    theme: string;
    themeColor: string;
    value: number;
}
interface Roll {
    id: number;
    modifier: number;
    qty: number;
    rolls: Array<Dice>;
    sides: string;
    value: number;
}
interface DiceTrayConfig {
    assetPath?: string;
    gravity?: number;
    mass?: number;
    friction?: number;
    restitution?: number;
    angularDamping?: number;
    linearDamping?: number;
    spinForce?: number;
    throwForce?: number;
    startingHeight?: number;
    settleTimeout?: number;
    offscreen?: boolean;
    delay?: number;
    lightIntensity?: number;
    enableShadows?: boolean;
    shadowTransparency?: number;
    theme?: string;
    themeColor?: string;
    scale?: number;
    suspendSimulation?: boolean;
    origin?: string;
    onReady?(rollDice?: Function): void;
    onDieComplete?(): void;
    onRollComplete?(results: Array<Roll>): void;
    onRemoveComplete?(): void;
    onThemeConfigLoaded?(): void;
    onThemeLoaded?(): void;
}
export const useDiceTray: (diceTrayConfig?: Partial<DiceTrayConfig>) => {
    diceTray: React.JSX.Element;
    rollDice: (notation?: string | Array<string>) => void;
};

//# sourceMappingURL=index.d.ts.map
