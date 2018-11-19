chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'twitter.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.hideTwitterStats) {
            chrome.tabs.getSelected(null, function (tab) {
                chrome.pageAction.setIcon({tabId: tab.id, path: 'images/twitter_active.png'});
            });
        } else {
            chrome.tabs.getSelected(null, function (tab) {
                chrome.pageAction.setIcon({tabId: tab.id, path: 'images/twitter_inactive.png'});
            });
        }
    }
);