const resistMapping: { [key: string]: string } = {
    wk: "Weak",
    rs: "Resist",
    ab: "Absorb",
    rp: "Repel",
    nu: "Block",
};

export function getResists(resist: string): string {
    return resistMapping[resist] || '';
}