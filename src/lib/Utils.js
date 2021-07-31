export function copyTextFromElement(element) {
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
}