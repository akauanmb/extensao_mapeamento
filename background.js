chrome.commands.onCommand.addListener((command) => {
    if(command === "execute_shortpath"){
        //aqui preciso utilizar algo para identificar a tab onde eu devo injetar o script
        chrome.tabs.query({ active: true, currentWindow: true},  (tabs)=>{
            let activeTabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: {tabId : activeTabId},
                files: ["content_script.js"],
            })
        });
    }



})