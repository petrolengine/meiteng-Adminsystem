

export function getReadableTime(src) {
    const date = new Date(src);
    return date.toLocaleDateString("zh");
}