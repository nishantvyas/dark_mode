chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleDarkMode,
  });
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}