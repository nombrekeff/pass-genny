// Fallback in case Clipboard API is not supported
function fallbackCopyTextToClipboard(text) {
    // Wrap in promise to resemble the aync Clipboard API
    return new Promise((resolve, reject) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand("copy");
            successfull ? resolve() : reject();
        } catch (err) {
            reject(err);
        }

        document.body.removeChild(textArea);
    });
}

// Attempts to copy text to cliboard, either using Clipboard Async API, 
// Or falling back to "execCommand('copy')"
export function copyTextToClipboard(text) {
    const cliboardSupported = navigator.clipboard;

    const copyPromise = cliboardSupported
        ? navigator.clipboard.writeText(text)
        : fallbackCopyTextToClipboard(text);

    return copyPromise.then(() => text);
}