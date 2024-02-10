export type easeFunc = (k: number) => number;

export const easeIn = (func: easeFunc): easeFunc => func;

export const easeOut =
    (func: easeFunc): easeFunc =>
    (k: number) =>
        1 - func(1 - k);

const _easeFromTo =
    (from: easeFunc, to: easeFunc): easeFunc =>
    (k: number) =>
        (k *= 2) < 1 ? from(k) / 2 : (to(k - 1) + 1) / 2;

export const easeInOut = (func: easeFunc): easeFunc =>
    _easeFromTo(easeIn(func), easeOut(func));

export const easeOutIn = (func: easeFunc): easeFunc =>
    _easeFromTo(easeOut(func), easeIn(func));

export type easeType = "easeIn" | "easeOut" | "easeInOut" | "easeOutIn";

export const ease = (type: easeType, func: easeFunc): easeFunc => {
    switch (type) {
        case "easeIn":
            return easeIn(func);
        case "easeOut":
            return easeOut(func);
        case "easeInOut":
            return easeInOut(func);
        case "easeOutIn":
            return easeOutIn(func);
    }
};
