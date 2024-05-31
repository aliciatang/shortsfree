chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
  chrome.tabs.query({
    active: true,
    currentWindow: true
  },(tabs)=>{
    if(tabs.length > 0) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id}, files: ['contentScript.js']
      });
    }
  })})