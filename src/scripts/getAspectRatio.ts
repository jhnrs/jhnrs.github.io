export function calculateAspectRatio(w: number, h: number): string {
    const getGcd = (a: number, b: number): number => (b === 0 ? a : getGcd(b, a % b));
    const common = getGcd(w, h);

    return `${w / common}:${h / common}`
}