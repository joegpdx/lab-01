export default function isYes(str) {
    if (str === 'Y') {
        return true;
    } else if (str.toLowerCase() === 'yes') {
        return true;
    } else if (str.toLowerCase() === 'y') {
        return true;
    } else if (str.toLowerCase() === 'Yes') {
        return true;
    } else return false;
}