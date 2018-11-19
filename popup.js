function executeScript() {
    chrome.tabs.executeScript({
        file: 'twitter.js',
        runAt: 'document_end',
    });
}

executeScript();
window.close();