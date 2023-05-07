import type { MutableRefObject } from "react";

export interface DiceTrayConfig {
    height: number,
    width: number,
}

export interface RollDiceConfig {
    count: number,
    theme: string,
}

export const DEFAULT_DICETRAY_CONFIG: DiceTrayConfig = {
    height: 500,
    width: 500,
}