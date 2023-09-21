const color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {

  chrome.action.setBadgeText({text: 'ON'});
  chrome.action.setBadgeBackgroundColor({color: '#4688F1'});


  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log("Message: " + request.greeting);

    //API call example
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

});
