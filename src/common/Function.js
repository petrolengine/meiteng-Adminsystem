

export function getReadableTime(src) {
    const date = new Date(src);
    return date.toLocaleDateString("zh");
}

/**
 * Convert formData to json object
 * @param formData source formData
 * @returns {object} json object
 */
export function formData2Json(formData) {
    const object = {};
    formData.forEach((value, key) => {
        if (value.length > 0) {
            object[key] = value;
        }
    });
    return object;
}