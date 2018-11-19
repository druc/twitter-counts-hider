function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function hideTwitterStats() {
    document.querySelectorAll('.ProfileTweet-actionCount, .ProfileCardStats-statValue, .ProfileNav-value, .TweetImpressionsModule, .stat-count')
        .forEach((function (elem) {
            elem.style.display = 'none';
        }));
}

if (localStorage.hasOwnProperty('hideTwitterStats') && localStorage.hideTwitterStats === 'true') {
    hideTwitterStats();
    document.addEventListener("DOMNodeInserted", debounce(hideTwitterStats, 50), false);
    chrome.runtime.sendMessage({hideTwitterStats: true});
} else {
    chrome.runtime.sendMessage({hideTwitterStats: false});
}