export interface Dice {
    sides: string,
    groupId: number,
    rollId: number,
    theme: string,
    themeColor: string,
    value: number
}

export interface Roll {
    id: number,
    modifier: number,
    qty: number,
    rolls: Array<Dice>,
    sides: string,
    value: number
}